import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { connect } from 'react-redux';
import { login as actionLogin } from '../../redux/actions';
import log from '../../util/logger';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonGroup: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const ApplicationBar =  ({ title, user, onLogout, onLogin, onCreateAccount, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <div className={classes.buttonGroup}>
            {user ? (
              <>
                <Typography variant="contained" className={classes.title}>{user.first} {user.last}</Typography>
                <Button variant="contained" color="primary" onClick={onLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button variant="contained" color="primary" onClick={onLogin}>Login</Button>
                <Button variant="contained" color="secondary" onClick={onCreateAccount}>Sign up</Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ApplicationBar.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object,
  onLogout: PropTypes.func,
  onLogin: PropTypes.func,
  onCreateAccount: PropTypes.func
};

ApplicationBar.defaultProps = {
  title: 'Default Title',
  user: null
};

const mapStateToProps = (state /*, ownProps*/) => {
};

const mapDispatchToProps = dispatch => {
  log.debug('Match dispatch to props in application bar');
  return {
    onLogin: (username, password) => dispatch(actionLogin(username, password))
  }
};

connect(mapStateToProps, mapDispatchToProps)(ApplicationBar);

export {
  ApplicationBar
}
