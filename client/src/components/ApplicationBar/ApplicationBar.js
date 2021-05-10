import React from 'react';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu';

import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";
import { login as actionLogin } from '../../redux/actions';
import log from '../../util/logger';

const styles = (theme) => ({
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
});

const height = 25;  
class ApplicationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
  }

  static propTypes = {
    title: PropTypes.string,
    user: PropTypes.object,
    onLogout: PropTypes.func,
    onLogin: PropTypes.func,
    onCreateAccount: PropTypes.func
  };

  static defaultProps = {
    title: 'Default Title',
    user: null
  };

  setAnchorEl = (newValue) => {
    this.setState((state) => {
      return { ...state, anchorEl: newValue };
    });
  }

  render = () => {
    const { classes } = this.props;

    const handleClick = (event) => { this.setAnchorEl(event.currentTarget); };
    const handleClose = () => { this.setAnchorEl(null); };
    const open = Boolean(this.state.anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton id="toolBarButton" aria-haspopup="true" className={classes.menuButton} color="inherit" aria-controls="menu" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={open}
              onClose={handleClose} 
              PaperProps={{  
                style: {  
                  maxHeight: height * 5,  
                  width: 300,  
                },  
              }}
            >
              <MenuItem key="Home" onClick={handleClose}><Link to="/home">{this.props.t("appbar_home")}</Link></MenuItem>
              <MenuItem key="Profile" onClick={handleClose}><Link to="/profile">{this.props.t("appbar_profile")}</Link></MenuItem>
              <MenuItem key="HomeWithQueryParam" onClick={handleClose}><Link to="/home?test=1&tewrw=sdf">{this.props.t("appbar_query_param")}</Link></MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
              {this.title}
            </Typography>
            <div className={classes.buttonGroup}>
              {this.props.user ? (
                <>
                  <Typography variant="contained" className={classes.title}>{this.props.user.first} {this.props.user.last}</Typography>
                  <Button variant="contained" color="primary" onClick={this.props.onLogout}>{this.props.t("appbar_logout")}</Button>
                </>
              ) : (
                <>
                  <Button variant="contained" color="primary" onClick={this.props.onLogin}>{this.props.t("appbar_login")}</Button>
                  <Button variant="contained" color="secondary" onClick={this.props.onCreateAccount}>{this.props.t("appbar_signup")}</Button>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};
  
const mapDispatchToProps = dispatch => {
  log.debug('Match dispatch to props in application bar');
  return {
    onLogin: (username, password) => dispatch(actionLogin(username, password))
  }
};

const ApplicationBarHOC = withRouter(connect(mapDispatchToProps)(withStyles(styles)(withTranslation()(ApplicationBar))));
export {
  ApplicationBarHOC as ApplicationBar,
}
