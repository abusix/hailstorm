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
                "border-b border-r border-neutral-300 px-2.5 text-neutral-900",
                className
            )}
            {...props}
        >
            {children}
        </td>
    );
};
