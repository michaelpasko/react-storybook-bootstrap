import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
import { Splash } from '../../components/Splash/Splash';

import log from '../../util/logger';

// Redux
import { connect } from 'react-redux';
import { dispatch } from '../../redux/store';
import { login as actionLogin } from '../../redux/thunks/loginThunk';
import { changeLanguage as actionChangeLanguage } from '../../redux/actions';

import './main.css';

const standardArticle = {
  title: 'This is an example title',
  body: 'Render pages with mock data. This makes it easy to build and review page states without\
        needing to navigate to them in your app. Here are some handy patterns for managing page data\
        in Storybook:',
};

/**
 * Main entry page for the Application
 */
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= { open: false, isGerman: this.props.isGerman };
  }

  static propTypes = {
    title: PropTypes.string,
    subPage: PropTypes.element,
    user: PropTypes.shape({}),
    isGerman: PropTypes.bool,
    jwt: PropTypes.string,
  };

  static defaultProps = {
    title: 'Test - DEFAULT!',
    subPage: <Splash/>,
    user: null,
    isGerman: false,
    jwt: null,
  };

  // Component lifecycle
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
     isGerman: nextProps.isGerman,
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

  handleLoginCheck = (username='Test', password='TestPass') => {
    dispatch(actionLogin('TestUser', 'TestPass'));
  };

  handleClose = (eventPayload) => {
    this.setState({ ...this.state, open: false });
    log.debug('----- Debugging handleClose -------');
  };

  handleLogout = (eventPayload) => {
    log.debug('----- Debugging handleLogout -------');
  };

  handleLanguageChange = (eventPayload) => {
    log.debug('----- Debugging handleLogout -------');
    if (this.state.isGerman) {
      dispatch(actionChangeLanguage('en'));
    } else {
      dispatch(actionChangeLanguage('ger'));
    }
  };

  handleOnCreateAccount = (eventPayload) => {
    log.debug('----- Close dialog -------');
  };

  render = () => {
    const testLinkId = 234;
    const query = new URLSearchParams(this.props.location.search);;//new URLSearchParams(locationURL.search);
    const { id } = this.props.match.params;

    return (
      <article>
        <ApplicationBar t={this.props.t} title={this.props.t('main_appbar_title')} user={this.props.user} onLogin={this.handleLogin} onLogout={this.handleLogout} onCreateAccount={this.handleOnCreateAccount} />

        <section>
          <Button variant="contained" color="primary" onClick={this.handleLanguageChange}>{this.props.t("main_change_language_button")}</Button>
          <br />
          {this.props.subPage}
          <h3>Test Data</h3>
          <div>ID: {id}<br />TestLink: {testLinkId}<br />queryParameter: {query}</div>
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
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
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
  log.debug('----- Mapping Redux State to Props-------');
  return {
    isGerman: state.il8n.isGerman,
    jwt: state.login.jwt
  }
};

export default withRouter(connect(mapStateToProps)(withTranslation()(Main)));