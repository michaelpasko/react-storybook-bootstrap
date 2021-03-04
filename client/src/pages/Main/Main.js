import React from 'react';
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

import { ApplicationBar } from '../../components/ApplicationBar/ApplicationBar';
import { Article } from '../../components/Article/Article';

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
}

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
    user: PropTypes.shape({}),
    isGerman: PropTypes.bool,
  };

  static defaultProps = {
    title: 'Test - DEFAULT!',
    user: null,
    isGerman: false
  };

  // Component lifecycle
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
     isGerman: nextProps.isGerman
    };
   }

  // UI Handlers
 handleLogin = (eventPayload) => {
    log.debug('----- Debugging handleLogin -------');
    this.setState({ ...this.state, open: true });
  }

  handleLoginCheck = (username='Test', password='TestPass') => {
    dispatch(actionLogin('TestUser', 'TestPass'));
  }

  handleClose = (eventPayload) => {
    this.setState({ ...this.state, open: false });
    log.debug('----- Debugging handleClose -------');
  }

  handleLogout = (eventPayload) => {
    log.debug('----- Debugging handleLogout -------');
  }

  handleLanguageChange = (eventPayload) => {
    log.debug('----- Debugging handleLogout -------');
    if (this.state.isGerman) {
      dispatch(actionChangeLanguage('en'));
    } else {
      dispatch(actionChangeLanguage('ger'));
    }
  }

  handleOnCreateAccount = (eventPayload) => {
    log.debug('----- Close dialog -------');
  }
  render = () => {
    return (
      <article>
        <ApplicationBar title={this.props.t('main_appbar_title')} user={this.user} onLogin={this.handleLogin} onLogout={this.handleLogout} onCreateAccount={this.handleOnCreateAccount} />
  
        <section>
          <div>
            <Button variant="contained" color="primary" onClick={this.handleLanguageChange}>{this.props.t("main_change_language_button")}</Button>
          </div>
          <h2>{this.props.t("main_header")}</h2>
          <p>
            {this.props.t("main_introduction")}
          </p>
          <p> {this.props.t("main_title", { title:this.props.title })}</p>
          <p>
            We recommend building UIs with a{' '}
            <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
              <strong>component-driven</strong>
            </a>{' '}
            process starting with atomic components and ending with pages.
          </p>
          <p>
            {this.props.t("main_render_with_mock")}
          </p>
          <ul>
            <li>
              {this.props.t("main_render_higher_level")}
            </li>
            <li>
              {this.props.t("main_render_assemble_data")}
            </li>
          </ul>
          <p>
            Get a guided tutorial on component-driven development at{' '}
            <a href="https://www.learnstorybook.com" target="_blank" rel="noopener noreferrer">
              Learn Storybook
            </a>
            . Read more in the{' '}
            <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
              docs
            </a>
            .
          </p>
          <Article article={standardArticle}/>
          <div className="tip-wrapper">
            <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
            <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                  id="a"
                  fill="#999"
                />
              </g>
            </svg>
            Viewports addon in the toolbar
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
    ...ownProps,
    isGerman: state.il8n.isGerman
  }
};

export default connect(mapStateToProps)(withTranslation()(Main));