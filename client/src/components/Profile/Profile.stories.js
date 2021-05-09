import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProfileProfile } from './Profile';

// https://www.lipsum.com/
const ProfileWithData = {
  title: '1914 translation by H. Rackham',
};

const ProfileWithNoData = {
  title: '',
};

const stories = storiesOf('Components/Profile', module);
stories.add('Detail', () => <Profile { ...ProfileWithData } />);
stories.add('Defaults', () => <Profile { ...ProfileWithNoData } />);
