import type { Meta, StoryObj } from '@storybook/react';

import { DividerLine } from './divider-line';
import React from 'react';

const meta: Meta<typeof DividerLine> = {
    title: 'DividerLine',
    component: DividerLine,
    parameters: { layout: 'fullscreen' },
    render: () => (
        <div className="p-2">
            <span>🌞</span>
            <DividerLine />
            <span>🌙</span>
        </div>
    ),
};

export default meta;
type Story = StoryObj<typeof DividerLine>;

export const Default: Story = {};
