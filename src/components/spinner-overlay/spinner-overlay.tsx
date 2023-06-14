import React from "react";
import { Spinner } from "../spinner/spinner";

export const SpinnerOverlay = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-neutral-0 opacity-50">
            <Spinner size="medium" />
        </div>
    );
};
