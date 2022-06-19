import React from 'react';

import MobileBar from './mobilebar';

export default {
  title: 'Component/Mobilebar',
  component: MobileBar,
};

const Template = (args) => <MobileBar {...args} />;

export const Primary = Template.bind({});
