import React, { forwardRef, HTMLProps, ReactNode } from "react";
import { classNames } from "../../../../util/class-names";

export interface RowProps extends HTMLProps<HTMLTableRowElement> {
    children: ReactNode;
    className?: string;
    isExpanded?: boolean;
}

const TableBodyRow = forwardRef<HTMLTableRowElement, RowProps>(
    ({ children, className, isExpanded, style, ...props }, ref) => {
        return (
            <tr
                className={classNames(
                    className,
                    isExpanded ? "bg-bg-brand-subtle" : "border-b-border-secondary border-b"
                )}
                ref={ref}
                style={style}
                {...props}
            >
                {children}
            </tr>
        );
    }
);

export { TableBodyRow };
