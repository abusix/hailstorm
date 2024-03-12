import React from "react";
import { classNames } from "../../util/class-names";

type BreadcrumbItemProps = AsChildProps<React.AnchorHTMLAttributes<HTMLAnchorElement>> & {
    isActive?: boolean;
};

export const BreadcrumbsItem: React.FC<BreadcrumbItemProps> = ({ isActive, asChild, ...props }) => {
    const Comp = asChild ? Slot : "a";

    return (
        <Comp
            className={classNames(
                "headline-500 text-neutral-800",
                !isActive && "cursor-pointer underline-offset-2 hover:underline",
                isActive && "text-black"
            )}
            {...props}
        />
    );
};
