import React from 'react';

import { Main } from './Main';
import * as ApplicationBarStories from '../components/ApplicationBar/ApplicationBar.stories';

export default {
  title: 'Pages/Main',
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...ApplicationBarStories.UserLoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...ApplicationBarStories.NoUser.args,
};
