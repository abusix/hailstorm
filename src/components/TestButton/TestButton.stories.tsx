import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TestButton from './TestButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TestButton',
  component: TestButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TestButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestButton> = (args) => <TestButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
  label: 'Button',
};

export const Minimal = Template.bind({});
Minimal.args = {
    variant: 'minimal',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
  label: 'Button',
}
