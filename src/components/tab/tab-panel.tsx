import { Tab as HeadlessTab } from '@headlessui/react';
import React from 'react';

interface TabPanelsProps {
  children: React.ReactNode;
}

export const TabPanels = ({ children }: TabPanelsProps) => {
  return <HeadlessTab.Panels as={React.Fragment}>{children}</HeadlessTab.Panels>;
};
