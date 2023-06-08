import React from 'react';
import { TableBody } from './table-body/table-body';
import { TableHeader } from './table-header/table-header';
import { classNames } from '../../util/class-names';

interface TableUnvirtualizedProps {
    children: React.ReactNode;
    height?: number;
    isContainerBordersShown?: boolean;
    hasFixedTableLayout?: boolean;
}

const TableUnvirtualized = ({
    children,
    height,
    isContainerBordersShown = true,
    hasFixedTableLayout,
}: TableUnvirtualizedProps) => {
    return (
        <div
            className={classNames(
                'rounded-lg bg-neutral-0',
                isContainerBordersShown && 'overflow-y-auto rounded-lg border border-neutral-300'
            )}
            style={{ height }}
        >
            <table className={classNames(hasFixedTableLayout && 'table-fixed', 'w-full text-sm')}>{children}</table>
        </div>
    );
};

TableUnvirtualized.Body = TableBody;
TableUnvirtualized.Header = TableHeader;

export { TableUnvirtualized };
