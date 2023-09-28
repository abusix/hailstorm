import React from "react";
import { classNames } from "../../util/class-names";

interface SidebarContainerProps {
    sidebarContent: React.ReactNode;
    pageContent: React.ReactNode;
    className?: string;
}

export const SidebarContainer = ({
    sidebarContent,
    pageContent,
    className,
}: SidebarContainerProps) => {
    return (
        <div className={classNames("flex flex-grow", className)}>
            {sidebarContent}
            <div className="w-full overflow-x-hidden bg-neutral-50">
                <div className="mx-auto w-full max-w-285 px-10 py-5">{pageContent}</div>
            </div>
        </div>
    );
};
