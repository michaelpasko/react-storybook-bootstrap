import React from 'react';
import { storiesOf } from '@storybook/react';
import { Splash } from './Splash';

// https://www.lipsum.com/
const SplashWithData = {
  title: '1914 translation by H. Rackham',
};

const SplashWithNoData = {
  title: '',
};

const stories = storiesOf('Components/Splash', module);
stories.add('Detail', () => <Splash { ...SplashWithData } />);
stories.add('Defaults', () => <Splash { ...SplashWithNoData } />);
