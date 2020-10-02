import React from 'react';

import { Article } from './Article';

export default {
  title: 'Components/Article',
  component: Article,
};

const Template = (args) => <Article {...args} />;

export const Detail = Template.bind({});
Detail.args = {
  article: {
    title: 'Testing Storybook',
    body: 'Working again',
  },
};

