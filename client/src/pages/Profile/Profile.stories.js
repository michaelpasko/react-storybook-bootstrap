import React from 'react';
import { storiesOf } from '@storybook/react';
import { Profile } from './Profile';

// HOC component depndencies
import { Route } from 'react-router-dom';
import { store } from '../../redux/store';
import ProviderWrapper from '../../stories/ProviderWrapper';

const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Route path="*" component={(args) => story(args)} /> 
  </ProviderWrapper>
);

// https://www.lipsum.com/
const ProfileWithData = {
  title: '1914 translation by H. Rackham',
};

const ProfileWithNoData = {
  title: '',
};

const stories = storiesOf('Components/Profile', module);
stories.addDecorator(withProvider);
stories.add('Detail', () => <Profile { ...ProfileWithData } />);
stories.add('Defaults', () => <Profile { ...ProfileWithNoData } />);
