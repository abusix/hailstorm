import React from "react";
import { PageDescription } from "./page-description";
import { PageTitle } from "./page-title";
import { classNames } from "../../util/class-names";

interface PageProps {
    children: React.ReactNode;
    className?: string;
}

const Page = ({ children, className }: PageProps) => {
    return <div className={classNames("flex flex-col gap-2", className)}>{children}</div>;
};

Page.Title = PageTitle;
Page.Description = PageDescription;

export { Page };
