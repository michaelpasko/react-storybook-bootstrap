import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { I18nextProvider } from "react-i18next";
import i18n from "../util/il8n";

const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router>
        { children }
      </Router>
    </I18nextProvider>
  </Provider>
);

export default ProviderWrapper;