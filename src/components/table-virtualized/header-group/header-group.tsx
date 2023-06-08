import React from 'react';
import { HeaderGroup } from '@tanstack/react-table';
import { HeaderCell } from '../header-cell/header-cell';
import { TableUnvirtualized } from '../../table-unvirtualized/table-unvirtualized';

export interface VirtualizedHeaderGroupProps<TableData> {
    group: HeaderGroup<TableData>;
    isDraggableColumnEnabled?: boolean;
    isExpandableColumnEnabled?: boolean;
}

export const VirtualizedHeaderGroup = <TableData,>({
    group,
    isDraggableColumnEnabled,
    isExpandableColumnEnabled,
}: VirtualizedHeaderGroupProps<TableData>) => {
    return (
        <TableUnvirtualized.Header.Row key={group.id}>
            {isDraggableColumnEnabled ? <th className="w-16 bg-neutral-50" /> : null}

            {group.headers.map((header) => (
                <HeaderCell<TableData> key={header.id} header={header} />
            ))}

            {isExpandableColumnEnabled ? <th className="w-16 bg-neutral-50" /> : null}
        </TableUnvirtualized.Header.Row>
    );
};
