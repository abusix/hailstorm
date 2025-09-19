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
                "headline-400 bg-neutral-0 border-r border-b border-neutral-300 px-2.5 text-neutral-900 first:border-l",
                className
            )}
            {...props}
        >
            {children}
        </td>
    );
};
