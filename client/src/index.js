import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import { Routes } from './routes';

// Redux
import { Provider } from 'react-redux'
import { store } from './redux/store'

import { I18nextProvider } from "react-i18next";
import i18n from "./util/il8n";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback={<div>Loading ...</div>}>
        <I18nextProvider i18n={i18n}>
          <Router>
              <Routes />
            </Router>
        </I18nextProvider>
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
