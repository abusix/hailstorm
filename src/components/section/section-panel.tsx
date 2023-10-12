import React from "react";

export interface SectionPanelProps {
    children: React.ReactNode;
}

/**
 * @deprecated Use the dedicated Panel component
 * Delete me on version 3
 */
export const SectionPanel = ({ children }: SectionPanelProps) => {
    return (
        <div className="relative rounded border border-neutral-300 bg-neutral-0 p-5">
            {children}
        </div>
    );
};
