import React from "react";
import { BreadcrumbsItem } from "./breadcrumbs-item";
import { BreadcrumbsArrow } from "./breadcrumbs-arrow";

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

Breadcrumbs.Item = BreadcrumbsItem;
Breadcrumbs.Arrow = BreadcrumbsArrow;

export { Breadcrumbs };
