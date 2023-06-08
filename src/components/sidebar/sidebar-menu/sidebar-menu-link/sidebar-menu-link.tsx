import React from 'react';
import classNames from '../../../../util/class-names';

export interface SidebarMenuLinkProps {
    isActive?: boolean;
    children: React.ReactNode;
}

export const SidebarMenuLink = ({ isActive, children }: SidebarMenuLinkProps) => {
    return (
        <div
            className={classNames(
                'relative px-4 py-3 font-sans text-sm hover:bg-neutral-200 active:bg-neutral-100',
                isActive &&
                    'bg-primary-100 text-primary-400 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-[3px] before:rounded-r-md before:bg-primary-400 hover:bg-primary-100'
            )}
        >
            {children}
        </div>
    );
};
