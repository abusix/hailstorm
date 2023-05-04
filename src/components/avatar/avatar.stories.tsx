/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Avatar',
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    argTypes: {
        color: {
            options: ['blue', 'violet', 'green', 'neutral', 'yellow', 'teal', 'orange', 'pink', 'red'],
            control: 'select',
            defaultValue: 'blue',
        },
    },
    render: (args) => <Avatar {...args}>Label</Avatar>,
};
