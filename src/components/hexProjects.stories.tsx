import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Projects from './hexProjects';

export default {
  title: 'Section/Project',
  component: Projects,
} as ComponentMeta<typeof Projects>;

const Template: ComponentStory<typeof Projects> = () => <Projects />;

export const Primary = Template.bind({});
