import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';
import { Dialog } from './dialog';
import { getStoryDescription, hiddenArgControl } from '../../util/storybook-utils';

const SpanFooter = () => <span>test footer 🍭</span>;
const footerOptions = { undefined, SpanFooter: <SpanFooter /> };
const footerArgs = {
    options: Object.keys(footerOptions),
    mapping: footerOptions,
};

const meta: Meta<typeof Dialog> = {
    title: 'Dialog',
    component: Dialog,
    parameters: {
        ...getStoryDescription('Modal showing on top of the screen'),
        inlineStories: false, // keep controls interactive
    },
    args: {
        title: 'Dialog Title',
        children: 'Dialog Description',
        isShown: false,
        footer: undefined,
    },
    argTypes: {
        isShown: hiddenArgControl,
        onClose: hiddenArgControl,
        footer: footerArgs,
    },
    render: ({ children, ...args }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isShown, setIsShown] = useState(false);
        const toggleBtn = () => setIsShown((val) => !val);

        return (
            <div className="body-font">
                <button type="button" onClick={toggleBtn} className="bg-neutral-100 py-2 px-4 shadow">
                    show Modal
                </button>

                <Dialog {...args} isShown={isShown} onClose={toggleBtn}>
                    {children}
                </Dialog>
            </div>
        );
    },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Base: Story = {};
