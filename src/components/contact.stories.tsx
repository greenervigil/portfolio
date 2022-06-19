import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Contact from './contact';

export default {
  title: 'Section/Contact',
  component: Contact,
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = () => <Contact />;

export const Primary = Template.bind({});
