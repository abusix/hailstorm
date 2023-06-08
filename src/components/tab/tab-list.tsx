import React from 'react';
import { Tab as HeadlessTab } from '@headlessui/react';
import { TabType, useTabContext } from './tab-context';
import { classNames } from '../../util/class-names';

export interface TabListProps {
    children: React.ReactNode;
}

const listVariants: Record<TabType, string> = {
    primary: 'gap-5 pb-2',
    secondary: 'gap-2',
};

export const TabList = ({ children }: TabListProps) => {
    const { type } = useTabContext();

    return <HeadlessTab.List className={classNames('flex', listVariants[type])}>{children}</HeadlessTab.List>;
};
