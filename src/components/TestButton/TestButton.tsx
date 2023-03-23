import React from 'react';
import classNames from '../../util/class-names';

const buttonVariants = {
    primary:
        'bg-primary-500 text-neutral-0 hover:bg-primary-600 active:bg-primary-600 focus:ring-2 focus:ring-primary-200 focus:bg-primary-600 disabled:bg-primary-200 fill-neutral-0',
    secondary:
        'text-neutral-700 bg-neutral-0 border border-neutral-400 hover:border-neutral-600 hover:text-neutral-800 active:bg-neutral-100 focus:ring-2 focus:ring-primary-200 focus:text-neutral-800 disabled:text-neutral-500 disabled:border-neutral-300 disabled:bg-neutral-0 fill-neutral-0',
    minimal:
        'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-800 active:bg-neutral-200 focus:ring-2 focus:ring-primary-200 focus:text-neutral-800 disabled:text-neutral-500 disabled:bg-neutral-0 fill-neutral-0',
    danger: 'text-neutral-0 bg-danger-500 hover:bg-danger-500 active:bg-danger-700 focus:ring-2 focus:ring-danger-100 focus:bg-danger-600 disabled:bg-danger-100 fill-neutral-0',
    'danger-secondary':
        'bg-neutral-0 text-danger-500 border border-danger-400 hover:bg-danger-50 hover:text-danger-600 active:border-danger-700 active:text-danger-700 active:bg-danger-100 focus:ring-2 focus:ring-danger-100 focus:text-danger-600 disabled:border-danger-100 disabled:text-danger-100 disabled:bg-neutral-0 fill-danger-600 disabled:fill-danger-100',
};

export type ButtonType = keyof typeof buttonVariants;

interface ButtonProps {
    /**
     * What background color to use
     */
    variant?: ButtonType;
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
  }

export default function TestButton({variant = 'primary', label, onClick = () => {}}:ButtonProps){
    return (
        <button
            className={classNames( `group flex h-8 items-center gap-2 rounded px-4 text-xs font-semibold focus:outline-none disabled:cursor-not-allowed`,
            buttonVariants[variant])}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
