import React from "react";
import { classNames } from "../../util/class-names";

export interface TableKeyValuePairHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    colSpan?: number;
}

export const TableKeyValuePairHeader = ({
    children,
    className,
    colSpan,
    ...props
}: TableKeyValuePairHeaderProps) => {
    return (
        <thead className={classNames(className)} {...props}>
            <tr>
                <th
                    className="headline-400 border-border-secondary bg-bg-secondary text-text-primary rounded-t-md border px-2.5 py-4 text-left"
                    colSpan={colSpan}
                >
                    {children}
                </th>
            </tr>
        </thead>
    );
};
