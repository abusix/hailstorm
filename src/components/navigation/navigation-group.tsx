import React from "react";
import { classNames } from "../../util/class-names";
import { NavigationGroupItemTag } from "./navigation-group-item-tag";

export interface NavigationGroupItemProps extends React.ComponentPropsWithoutRef<"div"> {
    isActive?: boolean;
    LeftIcon?: React.ElementType;
    tag?: string;
}

const NavigationGroupItem = ({
    children,
    isActive,
    LeftIcon,
    tag,
    ...props
}: NavigationGroupItemProps) => {
    return (
        <div
            className={classNames(
                "relative flex cursor-pointer items-center gap-x-3 px-4 py-3 text-sm text-neutral-0 hover:bg-primary-900+10",
                isActive && "bg-primary-900+20 font-semibold hover:bg-primary-900+20"
            )}
            {...props}
        >
            {LeftIcon ? <LeftIcon className="h-4 w-4" /> : null}
            {children}
            {tag ? <NavigationGroupItemTag>{tag}</NavigationGroupItemTag> : null}
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
