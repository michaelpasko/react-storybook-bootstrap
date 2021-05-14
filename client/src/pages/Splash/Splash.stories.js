import React from 'react';
import { storiesOf } from '@storybook/react';
import { Splash } from './Splash';


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
const SplashWithData = {
  title: '1914 translation by H. Rackham',
};

const SplashWithNoData = {
  title: '',
};

const stories = storiesOf('Components/Splash', module);
stories.addDecorator(withProvider);
stories.add('Detail', () => <Splash { ...SplashWithData } />);
stories.add('Defaults', () => <Splash { ...SplashWithNoData } />);
