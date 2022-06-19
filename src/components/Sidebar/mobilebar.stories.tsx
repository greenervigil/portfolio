import { ComponentMeta, ComponentStory } from '@storybook/react';

import Mobilebar from './mobilebar';

export default {
  title: 'Component/Mobilebar',
  component: Mobilebar,
} as ComponentMeta<typeof Mobilebar>;

const Template: ComponentStory<typeof Mobilebar> = () => <Mobilebar />;

export const Primary = Template.bind({});
