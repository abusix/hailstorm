import React from 'react';

export interface TrayButtonProps {
    id?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export const TrayButton = ({ onClick, id, children }: TrayButtonProps) => {
    return (
        <div
            role="button"
            id={id}
            tabIndex={-1}
            onClick={onClick}
            onKeyDown={onClick}
            className="cursor-pointer rounded p-3 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200"
        >
            {children}
        </div>
    );
};
