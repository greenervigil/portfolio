import { ComponentMeta, ComponentStory } from '@storybook/react';

import Container from './container';

export default {
  title: 'Component/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <p>This is a text piece of content.</p>
};