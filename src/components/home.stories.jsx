import React from 'react';

import Home from './home';

export default {
  title: 'Section/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Primary = Template.bind({});
