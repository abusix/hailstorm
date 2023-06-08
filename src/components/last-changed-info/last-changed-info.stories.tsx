import type { Meta, StoryObj } from '@storybook/react';

import { LastChangedInfo } from './last-changed-info';
import React from 'react';

const meta: Meta<typeof LastChangedInfo> = {
    title: 'Last Changed Info',
    component: LastChangedInfo,
};

export default meta;
type Story = StoryObj<typeof LastChangedInfo>;

export const Default: Story = {
    render: (args) => <LastChangedInfo {...args} />,
    args: {
        changedDate: new Date(),
        changedBy: 'By_You',
        className: '',
    },
};
