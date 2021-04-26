import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApplicationBar } from './ApplicationBar';


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
stories.add('NoUser', () => <ApplicationBar { ...NoUser } />);
stories.add('UserLoggedIn', () => <ApplicationBar { ...UserLoggedIn } />);
