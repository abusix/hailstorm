import React from "react";

export interface MenuInfoItemProps {
    title: string;
    subtitle: string;
}

export const MenuInfoItem = ({ title, subtitle }: MenuInfoItemProps) => {
    return (
        <div className="bg-bg-primary px-4 py-3">
            <div className="text-text-primary mb-1 truncate font-semibold" title={title}>
                {title}
            </div>
            <div className="text-text-secondary truncate text-sm" title={subtitle}>
                {subtitle}
            </div>
        </div>
    );
};
