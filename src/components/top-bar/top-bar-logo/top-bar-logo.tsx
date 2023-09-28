import React from "react";

export interface TopBarLogoProps {
    src: string;
    className?: string;
}

export const TopBarLogo = ({ src, className }: TopBarLogoProps) => {
    return <img src={src} alt="logo" className={className} />;
};
