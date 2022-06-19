import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './button';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    label: { control: 'text'},
    icon: { 
      control: 'select', 
      options: ['undefined', 'React', 'Github', 'Download'], 
      mapping: {
        undefined: <></>,
        React: <FontAwesomeIcon icon={faReact} />,
        Github: <FontAwesomeIcon icon={faGithub} />,
        Download: <FontAwesomeIcon icon={faDownload} />
      }
    }
  }
}as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'download'
};