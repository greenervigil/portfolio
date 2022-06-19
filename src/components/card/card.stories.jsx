import React from 'react';

import Card from './card';

export default {
  title: 'component/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 
        <div>
            <h1>Testing header</h1>
            <p>This is a test of the box component passing children.</p>
        </div>
}
