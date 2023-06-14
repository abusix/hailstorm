import React from "react";
import { PageDescription } from "./page-description";
import { PageTitle } from "./page-title";

interface PageProps {
    children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
    return <div className="flex flex-col gap-2">{children}</div>;
};

Page.Title = PageTitle;
Page.Description = PageDescription;

export { Page };
