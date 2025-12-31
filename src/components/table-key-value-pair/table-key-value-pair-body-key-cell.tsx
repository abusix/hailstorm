import React from "react";
import { classNames } from "../../util/class-names";

export type TableKeyValuePairBodyKeyProps = React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
>;

export const TableKeyValuePairBodyKeyCell = ({
    children,
    className,
    ...props
}: TableKeyValuePairBodyKeyProps) => {
    return (
        <td
            className={classNames(
                "headline-400 bg-bg-primary border-r border-b border-border-secondary px-2.5 text-text-primary first:border-l",
                className
            )}
            {...props}
        >
            {children}
        </td>
    );
};
