import { Menu as HeadlessMenu } from '@headlessui/react';
import React from 'react';
import classNames from '../../../util/class-names';

export interface MenuItemProps {
    children: React.ReactNode;
    LeftIcon?: React.ElementType;
    isSelected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const MenuItem = ({ children, LeftIcon, isSelected = false, disabled = false, onClick }: MenuItemProps) => {
    return (
        <HeadlessMenu.Item disabled={disabled}>
            {({ active }) => (
                <button
                    type="button"
                    className={classNames(
                        'group relative flex w-full cursor-pointer items-center gap-4 bg-neutral-0 px-4 py-2.5 hover:bg-neutral-100 focus:ring-2 focus:ring-primary-200 active:bg-neutral-200 disabled:bg-neutral-0',
                        active && 'bg-neutral-100',
                        isSelected && 'bg-primary-100 hover:bg-primary-100 active:bg-primary-100'
                    )}
                    disabled={disabled}
                    onKeyDown={onClick}
                    onClick={onClick}
                >
                    {LeftIcon ? (
                        <LeftIcon
                            className={classNames(
                                'h-4 w-4 fill-neutral-600 group-disabled:fill-neutral-400',
                                isSelected && 'fill-primary-400'
                            )}
                        />
                    ) : null}
                    <div
                        className={classNames(
                            'paragraph-200 text-neutral-800 group-disabled:text-neutral-400',
                            isSelected &&
                                'text-primary-400 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 before:rounded-r-sm before:bg-primary-400 group-disabled:before:bg-neutral-0'
                        )}
                    >
                        {children}
                    </div>
                </button>
            )}
        </HeadlessMenu.Item>
    );
};
