import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './button';

export default {
  title: 'Component/Button',
  component: Button,
}as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'download'
};