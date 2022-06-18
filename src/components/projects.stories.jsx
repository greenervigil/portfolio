import React from 'react';

import Projects from './projects';

export default {
  title: 'Project section',
  component: Projects,
};

const Template = (args) => <Projects {...args} />;

export const Primary = Template.bind({});
