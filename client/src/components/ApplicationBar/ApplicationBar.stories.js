import React from 'react';

import { ApplicationBar } from './ApplicationBar';

export default {
  title: 'Components/ApplicationBar',
  component: ApplicationBar
};

const Template = (args) => <ApplicationBar {...args} />;

export const NoUser = Template.bind({});
NoUser.args = {
  title: 'Test Title',
  user:null,
  isGerman: false,
  jwt:null
};

export const UserLoggedIn = Template.bind({});
UserLoggedIn.args = {
  title: 'Test Title',
  user: {
    first: 'Michael',
    last: 'Pasko'
  },
  isGerman: false,
  jwt:null
};