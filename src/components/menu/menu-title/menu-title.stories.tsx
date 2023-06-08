/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MenuTitle } from './menu-title';

const meta: Meta<typeof MenuTitle> = {
    title: 'Menu/MenuTitle',
    component: MenuTitle,
};

export default meta;
type Story = StoryObj<typeof MenuTitle>;

export const Default: Story = {
    render: () => (
        <div className="w-52">
            <MenuTitle>Title</MenuTitle>
        </div>
    ),
};
