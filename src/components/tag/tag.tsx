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
                "flex items-center rounded-sm bg-bg-secondary px-2 py-1 text-text-primary",
                disabled && "bg-bg-disabled text-text-disabled"
            )}
        >
            <div className="paragraph-100">{children}</div>
            {onClick ? (
                <button type="button" aria-label="Remove tag" onClick={onClick} disabled={disabled}>
                    <SmallCrossIcon
                        className={classNames(
                            "h-3 w-3 fill-icon-primary",
                            disabled && "fill-icon-disabled"
                        )}
                    />
                </button>
            ) : null}
        </div>
    );
};
