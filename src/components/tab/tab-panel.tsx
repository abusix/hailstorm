import { Tab as HeadlessTab } from '@headlessui/react';
import React from 'react';

export interface TabPanelProps {
    children: React.ReactNode;
}

export const TabPanel = ({ children }: TabPanelProps) => {
    return <HeadlessTab.Panel as={React.Fragment}>{children}</HeadlessTab.Panel>;
};
