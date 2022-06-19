import { ComponentMeta, ComponentStory } from '@storybook/react';

import Sidebar from './Sidebar';

export default {
  title: 'Component/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Primary = Template.bind({});
