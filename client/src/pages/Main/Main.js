import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { ApplicationBar } from '../../components/ApplicationBar/ApplicationBar';
import { Article } from '../../components/Article/Article'
import { login as actionLogin } from '../../redux/actions';
import log from '../../util/logger';


import { dispatch } from '../../redux/store';
import './main.css';

// Util
//import { login } from '../util/auth';




const standardArticle = {
  title: 'This is an example title',
  body: 'Render pages with mock data. This makes it easy to build and review page states without\
        needing to navigate to them in your app. Here are some handy patterns for managing page data\
        in Storybook:',
}
const Main = ({ title = 'Ovallis', user }) => {
  // Declare a new state variable, which we'll call "count"
  const [open, setOpen] = useState(false);

  // UI Handlers
  const handleLogin = (eventPayload) => {
    log.debug('----- Debugging handleLogin -------');
    setOpen(true);
  }

  const handleLoginCheck = (username='Test', password='TestPass') => {
    dispatch(actionLogin('TestUser', 'TestPass'));
  }

  const handleClose = (eventPayload) => {
    setOpen(false);
    log.debug('----- Debugging handleClose -------');
  }

  const handleLogout = (eventPayload) => {
    log.debug('----- Debugging handleLogout -------');
  }

  const handleOnCreateAccount = (eventPayload) => {
    log.debug('----- Close dialog -------');
  }

  return (
    <article>
      <ApplicationBar title={title} user={user} onLogin={handleLogin} onLogout={handleLogout} onCreateAccount={handleOnCreateAccount} />

      <section>
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page data
          in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
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

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Provide your email and password to login to this website
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleLoginCheck} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
    </article>
  );
};

Main.propTypes = {
  title: PropTypes.string,
  user: PropTypes.shape({})
};

Main.defaultProps = {
  title: 'Test',
  user: null,
};

export {
  Main
}