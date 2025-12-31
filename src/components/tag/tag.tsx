import React from "react";
import { classNames } from "../../util/class-names";
import { SmallCrossIcon } from "../../icons";

interface TagProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
}

export const Tag = ({ children, onClick, disabled }: TagProps) => {
    return (
        <div
            className={classNames(
                "bg-bg-secondary text-text-primary flex items-center rounded-sm px-2 py-1",
                disabled && "bg-bg-disabled text-text-disabled"
            )}
        >
            <div className="paragraph-100">{children}</div>
            {onClick ? (
                <button type="button" aria-label="Remove tag" onClick={onClick} disabled={disabled}>
                    <SmallCrossIcon
                        className={classNames(
                            "fill-icon-primary h-3 w-3",
                            disabled && "fill-icon-disabled"
                        )}
                    />
                </button>
            ) : null}
        </div>
    );
};
