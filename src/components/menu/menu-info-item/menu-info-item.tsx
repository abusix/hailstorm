import React from "react";

export interface MenuInfoItemProps {
    title: string;
    subtitle: string;
}

export const MenuInfoItem = ({ title, subtitle }: MenuInfoItemProps) => {
    return (
        <div className="bg-bg-primary px-4 py-3">
            <div className="mb-1 truncate font-semibold text-text-primary" title={title}>
                {title}
            </div>
            <div className="truncate text-sm text-text-secondary" title={subtitle}>
                {subtitle}
            </div>
        </div>
    );
};
