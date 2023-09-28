import React from "react";
import { classNames } from "../../util/class-names";
import { SmallCrossIcon } from "../../icons";

interface TagProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    className?: string;
}

export const Tag = ({ children, onClick, disabled, className }: TagProps) => {
    return (
        <div
            className={classNames(
                "flex items-center rounded bg-neutral-200 px-2 py-1 text-neutral-800",
                disabled && "bg-neutral-100 text-neutral-500",
                className
            )}
        >
            <div className="paragraph-100">{children}</div>
            {onClick ? (
                <button type="button" onClick={onClick} disabled={disabled}>
                    <SmallCrossIcon
                        className={classNames(
                            "h-3 w-3 fill-neutral-800",
                            disabled && "fill-neutral-500"
                        )}
                    />
                </button>
            ) : null}
        </div>
    );
};
