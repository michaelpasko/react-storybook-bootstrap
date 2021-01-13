import React from 'react';

import { Main } from './Main';
import * as HeaderStories from '../components/Header/Header.stories';

export default {
  title: 'Pages/Application',
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
