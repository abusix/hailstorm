import React from "react";
import { TableBody } from "./table-body/table-body";
import { TableHeader } from "./table-header/table-header";
import { classNames } from "../../util/class-names";

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
                "bg-bg-primary rounded-lg",
                isContainerBordersShown &&
                    "border-border-secondary overflow-y-auto rounded-lg border"
            )}
            style={{ height }}
        >
            <table className={classNames(hasFixedTableLayout && "table-fixed", "w-full text-sm")}>
                {children}
            </table>
        </div>
    );
};

TableUnvirtualized.Body = TableBody;
TableUnvirtualized.Header = TableHeader;

export { TableUnvirtualized };
