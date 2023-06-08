import React from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react';

export interface SidesheetPanelProps {
    children: React.ReactNode;
}

export const SidesheetPanel = ({ children }: SidesheetPanelProps) => {
    return <HeadlessDialog.Panel>{children}</HeadlessDialog.Panel>;
};
