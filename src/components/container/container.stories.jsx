import React from 'react';

import Container from './container';

export default {
  title: 'Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'This is a text piece of content.'
};