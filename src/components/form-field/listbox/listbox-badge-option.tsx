import React from 'react';
import { Badge, BadgeType } from '../../badge/badge';

export interface ListboxBadgeOptionProps {
    children: React.ReactNode;
    badgeType?: BadgeType;
}

export const ListboxBadgeOption = ({ children, badgeType = 'neutral' }: ListboxBadgeOptionProps) => {
    return (
        <div className="flex items-center">
            <Badge type={badgeType}>{children}</Badge>
        </div>
    );
};
