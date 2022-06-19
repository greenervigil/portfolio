import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import About from './about';

export default {
  title: 'Section/About',
  component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const Primary = Template.bind({});
