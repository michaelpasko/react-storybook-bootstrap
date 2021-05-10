import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApplicationBar } from './ApplicationBar';

// HOC component depndencies
import { Route } from 'react-router-dom';
import { store } from '../../redux/store';
import ProviderWrapper from '../../stories/ProviderWrapper';

const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Route path="*" component={(args) => story(args)} /> 
  </ProviderWrapper>
);

const NoUser = {
  title: 'Test Title',
  user:null,
  isGerman: false,
  jwt:null
};

const UserLoggedIn = {
  title: 'Test Title',
  user: {
    first: 'Michael',
    last: 'Pasko'
  },
  isGerman: false,
  jwt:null
};

const stories = storiesOf('Components/ApplicationBar', module);
stories.addDecorator(withProvider);
stories.add('NoUser', () => <ApplicationBar { ...NoUser } />);
stories.add('UserLoggedIn', () => <ApplicationBar { ...UserLoggedIn } />);
