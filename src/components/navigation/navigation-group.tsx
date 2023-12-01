import React from "react";
import { classNames } from "../../util/class-names";

export interface NavigationGroupItemProps {
    children: React.ReactNode;
    isActive?: boolean;
    LeftIcon?: React.ElementType;
}

const NavigationGroupItem = ({ children, isActive, LeftIcon }: NavigationGroupItemProps) => {
    return (
        <div
            className={classNames(
                "hover:bg-primary-900+10 relative flex items-center gap-x-3 px-4 py-3 text-sm text-neutral-0",
                isActive && "bg-primary-900+20 hover:bg-primary-900+20 font-semibold"
            )}
        >
            {LeftIcon ? <LeftIcon className="h-4 w-4" /> : null}
            {children}
            {isActive && (
                <div className="absolute bottom-0 left-0 top-0 h-full w-0.5 rounded-r-sm bg-neutral-0" />
            )}
        </div>
    );
};

const NavigationGroup = ({ children }: { children: React.ReactNode }) => {
    return <div className="pt-4">{children}</div>;
};

NavigationGroup.Item = NavigationGroupItem;

export { NavigationGroup };
