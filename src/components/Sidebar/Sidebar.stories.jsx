import React from 'react';

import Sidebar from './Sidebar';

export default {
  title: 'Component/Sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
