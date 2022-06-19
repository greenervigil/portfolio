import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Exp from './exp';

export default {
  title: 'Section/Experience',
  component: Exp,
} as ComponentMeta<typeof Exp>;

const Template: ComponentStory<typeof Exp> = () => <Exp />;

export const Primary = Template.bind({});
