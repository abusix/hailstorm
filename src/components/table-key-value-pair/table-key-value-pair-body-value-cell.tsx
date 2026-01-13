import React from "react";
import { classNames } from "../../util/class-names";

export type TableKeyValuePairBodyValueProps = React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
>;

export const TableKeyValuePairBodyValueCell = ({
    children,
    className,
    ...props
}: TableKeyValuePairBodyValueProps) => {
    return (
        <td
            className={classNames(
                "bg-bg-primary border-border-secondary text-text-primary border-r border-b px-2.5",
                className
            )}
            {...props}
        >
            {children}
        </td>
    );
};
