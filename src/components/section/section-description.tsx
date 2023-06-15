import React from "react";

export interface DescriptionProps {
    children: React.ReactNode;
}

export const SectionDescription = ({ children }: DescriptionProps) => {
    return <p className="paragraph-200 text-neutral-800">{children}</p>;
};
