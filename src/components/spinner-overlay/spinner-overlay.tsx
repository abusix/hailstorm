import React from "react";
import { Spinner } from "../spinner/spinner";
import { classNames } from "../../util/class-names";

export interface SpinnerOverlayProps {
    className?: string;
}

export const SpinnerOverlay = ({ className }: SpinnerOverlayProps) => {
    return (
        <div
            className={classNames(
                "absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-neutral-0 opacity-50",
                className
            )}
        >
            <Spinner size="medium" />
        </div>
    );
};
