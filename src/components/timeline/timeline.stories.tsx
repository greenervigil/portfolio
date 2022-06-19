import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Timeline from './timeline';

export default {
  title: 'Section/Timeline',
  component: Timeline,
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = () => <Timeline />;

export const Primary = Template.bind({});
