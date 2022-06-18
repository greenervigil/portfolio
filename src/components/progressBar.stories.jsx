import React from 'react';

import ProgressBar from './progressBar';

export default {
  title: 'Progress Bar',
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'React',
    percentage: 10
}