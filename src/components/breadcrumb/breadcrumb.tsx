import React from "react";
import { BreadcrumbItem } from "./breadcrumb-item";
import { BreadcrumbArrow } from "./breadcrumb-arrow";

export interface BreadcrumbProps {
    children: React.ReactNode;
}

const Breadcrumb = ({ children }: BreadcrumbProps) => {
    return (
        <nav className="flex flex-row items-center justify-center gap-1" role="navigation">
            {children}
        </nav>
    );
};

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Arrow = BreadcrumbArrow;

export { Breadcrumb };
