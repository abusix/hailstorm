import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Section } from './section';
import { Button } from '../button/button';

const meta: Meta<typeof Section> = {
    title: 'Section',
    component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
    render: () => (
        <Section>
            <Section.TitleGroup>
                <Section.Title>Section Title</Section.Title>
                <Section.Description>Description</Section.Description>
            </Section.TitleGroup>
            <Section.Panel>Place panel contet here</Section.Panel>
        </Section>
    ),
};

export const SectionWithAction: Story = {
    render: () => (
        <Section>
            <Section.TitleGroup>
                <Section.Title>Section Header</Section.Title>
                <div className="mb-4 flex w-full justify-between gap-4">
                    <Section.Description>Description</Section.Description>
                    <Button type="primary" onClick={() => alert('clicked')}>
                        Button
                    </Button>
                </div>
            </Section.TitleGroup>
            <Section.Panel>Place panel content here</Section.Panel>
        </Section>
    ),
};
