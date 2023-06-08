import React from 'react';

export interface SectionTitleProps {
    children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
    return <h4 className="headline-500 text-neutral-900">{children}</h4>;
};
