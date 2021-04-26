import React from 'react';
import { storiesOf } from '@storybook/react';
import { Route } from 'react-router-dom';

import Main from './Main';
import { store } from '../../redux/store';

import ProviderWrapper from '../../stories/ProviderWrapper';

const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Route path="*" component={(args) => story(args)} /> 
  </ProviderWrapper>
);

const UserLoggedIn = {
  title: 'Test Title',
  user: {
    first: 'Michael',
    last: 'Pasko'
  },
  isGerman: false,
  jwt:null
};

const NoUser = {
  title: 'Test Title',
  user:null,
  isGerman: false,
  jwt:null
};

const stories = storiesOf('Pages/Main', module);
stories.addDecorator(withProvider);
stories.add('Logged In', () => <Main { ...UserLoggedIn } />);
stories.add('Logged Out', () => <Main { ...NoUser } />);
