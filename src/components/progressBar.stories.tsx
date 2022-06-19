import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ProgressBar from './progressBar';

export default {
  title: 'Component/Progress Bar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'React',
    percentage: 10
}