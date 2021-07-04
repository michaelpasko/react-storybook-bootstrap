import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Internationalization
import { withTranslation } from "react-i18next";
// import il8n from '../../util/il8n';

import { ApplicationBar } from '../../components/ApplicationBar/ApplicationBar';
import { Splash } from '../Splash/Splash';

import log from '../../util/logger';

// Redux
import { connect } from 'react-redux';
import { dispatch } from '../../redux/store';
import { login as actionLogin, logout as actionLogout } from '../../redux/thunks/loginThunk';

import './main.css';

/**
 * Main entry page for the Application
 */
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= { open: false };
  }

  static propTypes = {
    title: PropTypes.string,
    subPage: PropTypes.element,
    jwt: PropTypes.string,
  };

  static defaultProps = {
    title: 'Test - DEFAULT!',
    subPage: <Splash/>,
    user: null,
    jwt: null,
  };

  // Component lifecycle
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
    };
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    log.debug('----- Debugging componentDidUpdate -------');
    if (this.props.jwt && this.state.open) {
      this.setState({ ...this.state, open: false });
    }
  }

  // UI Handlers
  handleLogin = (eventPayload) => {
    log.debug('----- Debugging handleLogin -------');
    this.setState({ ...this.state, open: true });
  };

  handleLoginCheck = (event) => {
    try {
      const username = this.state.username;
      const password = this.state.password;
      log.debug('----- Debugging handleLoginCheck -------');
      dispatch(actionLogin(username, password));
    } catch (e) {
      log.error(e);
    }
  };

  handleClose = (eventPayload) => {
    this.setState({ ...this.state, open: false });
    log.debug('----- Debugging handleClose -------');
  };

  handleLogout = (eventPayload) => {
    log.debug('----- Debugging handleLogout -------');
    dispatch(actionLogout());
  };

  handleOnCreateAccount = (eventPayload) => {
    log.debug('----- Close dialog -------');
  };

  render = () => {
    const testLinkId = 234;
    const query = new URLSearchParams(this.props.location.search);;//new URLSearchParams(locationURL.search);
    const { id } = this.props.match.params;

    const list = [];
    query.forEach((value, key) => list.push(<li key={key}>Key: {key} - value: {value} </li>));

    return (
      <article>
        <ApplicationBar title={this.props.t('main_appbar_title')} user={this.props.user} onLogin={this.handleLogin} onLogout={this.handleLogout} onCreateAccount={this.handleOnCreateAccount} />

        <section>
          <br />
          <Suspense fallback={<div>Loading...</div>}>
            {this.props.subPage}
          </Suspense>
          <h3>Test Data</h3>
          <div>ID: {id}<br />TestLink: {testLinkId}</div>
          <div className="container">
            Query Parameters:
            <ul>
            {list}
            </ul>
          </div>
        </section>

        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{this.props.t("login_form_title")}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {this.props.t("login_form_email_password")}
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Username"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value }) } 
                fullWidth
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value }) } 
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                {this.props.t("login_form_cancel_button")}
              </Button>
              <Button onClick={this.handleLoginCheck} color="primary">
                {this.props.t("login_form_login_button")}
              </Button>
            </DialogActions>
          </Dialog>
      </article>
    );
  }
};


const mapStateToProps = (state , ownProps) => {
  log.debug('----- Mapping Redux State to Props for Main Page-------');
  return {
    ...state,
    open: false,
    jwt: state.login.jwt
  }
};

export default withRouter(connect(mapStateToProps)(withTranslation()(Main)));