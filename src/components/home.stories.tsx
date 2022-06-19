import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Home from './home';

export default {
  title: 'Section/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Primary = Template.bind({});
