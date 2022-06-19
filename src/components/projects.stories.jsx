import React from 'react';

import Projects from './projects';

export default {
  title: 'Section/Project',
  component: Projects,
};

const Template = (args) => <Projects {...args} />;

export const Primary = Template.bind({});
