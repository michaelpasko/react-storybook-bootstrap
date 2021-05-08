import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
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

const height = 25;  
const ApplicationBar =  ({ title, user, onLogout, onLogin, onCreateAccount, ...props }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };
  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton id="toolBarButton" aria-haspopup="true" className={classes.menuButton} color="inherit" aria-controls="menu" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose} 
            PaperProps={{  
              style: {  
                maxHeight: height * 5,  
                width: 200,  
              },  
            }}
          >
            <MenuItem key="Profile" onClick={handleClose}>Profile</MenuItem>
            <MenuItem key="Account" onClick={handleClose}>My account</MenuItem>
            <MenuItem key="Logout" onClick={handleClose}>Logout</MenuItem>
          </Menu>
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
