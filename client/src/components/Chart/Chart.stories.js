import React from 'react';
import { storiesOf } from '@storybook/react';
import { Chart } from './Chart';

// HOC component depndencies
import { Route } from 'react-router-dom';
import { store } from '../../redux/store';
import ProviderWrapper from '../../stories/ProviderWrapper';

const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Route path="*" component={(args) => story(args)} /> 
  </ProviderWrapper>
);

const stories = storiesOf('Components/Chart', module);
stories.addDecorator(withProvider);
stories.add('Chart', () => <Chart/>);
