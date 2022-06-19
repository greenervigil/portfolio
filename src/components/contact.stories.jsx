import React from 'react';

import Contact from './contact';

export default {
  title: 'Section/Contact',
  component: Contact,
};

const Template = (args) => <Contact {...args} />;

export const Primary = Template.bind({});
