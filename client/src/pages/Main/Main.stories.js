import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter, Route } from 'react-router-dom';

import Main from './Main';
import { store } from '../../redux/store';
import * as ApplicationBarStories from '../../components/ApplicationBar/ApplicationBar.stories';

import ProviderWrapper from '../../stories/ProviderWrapper';

const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Route path="*" component={() => story()} /> 
  </ProviderWrapper>
)

const stories = storiesOf('pages/Main', module);
stories.addDecorator(withProvider);
stories.add('Logged In', () => <Main { ...ApplicationBarStories.UserLoggedIn.args }/>);
stories.add('Logged Out', () => <Main { ...ApplicationBarStories.NoUser.args }/>);
