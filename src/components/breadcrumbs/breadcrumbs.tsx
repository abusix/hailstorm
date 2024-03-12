import React from "react";
import { BreadcrumbItem } from "./breadcrumb-item";
import { BreadcrumbArrow } from "./breadcrumb-arrow";

export interface BreadcrumbsProps {
    children: React.ReactNode;
}

const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
    return (
        <nav className="flex flex-row items-center justify-center gap-1" role="navigation">
            {children}
        </nav>
    );
};

Breadcrumbs.Item = BreadcrumbItem;
Breadcrumbs.Arrow = BreadcrumbArrow;

export { Breadcrumbs };
