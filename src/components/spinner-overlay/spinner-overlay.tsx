import React from "react";
import { Spinner } from "../spinner/spinner";

export const SpinnerOverlay = () => {
    return (
        <div className="bg-neutral-0 absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center opacity-50">
            <Spinner size="medium" />
        </div>
    );
};
