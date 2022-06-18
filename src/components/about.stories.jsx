import React from 'react';

import About from './about';

export default {
  title: 'About section',
  component: About,
};

const Template = (args) => <About {...args} />;

export const Primary = Template.bind({});
