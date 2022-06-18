import React from 'react';

import Box from './box';

export default {
  title: 'Box',
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 
        <div>
            <h1>Testing header</h1>
            <p>This is a test of the box component passing children.</p>
        </div>
}
