import type { Meta, StoryObj } from '@storybook/react';

import { Badge, BadgeProps } from './badge';
import React from 'react';
import { hiddenArgControl } from '../../util/storybook-utils';

const types: BadgeProps['type'][] = [
    'primary',
    'violet',
    'green',
    'neutral',
    'yellow',
    'teal',
    'orange',
    'pink',
    'red',
];
const shapes: BadgeProps['shape'][] = ['default', 'rounded'];

const meta: Meta<typeof Badge> = {
    title: 'Badge',
    component: Badge,
    args: { children: 'Badge Label' },
    argTypes: { onClick: hiddenArgControl },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const TypesAndShapes: Story = {
    args: {
        onClick: undefined,
    },
    argTypes: {
        type: hiddenArgControl,
        shape: hiddenArgControl,
    },
    render: ({ children, ...args }) => (
        <div className={`container grid grid-cols-2 gap-4`}>
            {shapes.map((shape) => (
                <div key={shape} className="grid gap-4">
                    <header>{shape}</header>
                    {types.map((type) => (
                        <Badge key={shape! + type} {...args} shape={shape} type={type}>
                            {children}
                        </Badge>
                    ))}
                </div>
            ))}
        </div>
    ),
};
