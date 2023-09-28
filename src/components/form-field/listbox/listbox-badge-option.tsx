import React from "react";
import { Badge, BadgeType } from "../../badge/badge";
import { classNames } from "../../../util/class-names";

export interface ListboxBadgeOptionProps {
    children: React.ReactNode;
    badgeType?: BadgeType;
    className?: string;
}

export const ListboxBadgeOption = ({
    children,
    badgeType = "neutral",
    className,
}: ListboxBadgeOptionProps) => {
    return (
        <div className={classNames("flex items-center", className)}>
            <Badge type={badgeType}>{children}</Badge>
        </div>
    );
};
