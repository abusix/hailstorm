import React from "react";

export interface TopBarNavLinksProps {
    children: React.ReactNode;
}

export const TopBarNavLinks = ({ children }: TopBarNavLinksProps) => {
    return <div className="flex grow gap-12 pl-20 pr-6">{children}</div>;
};
