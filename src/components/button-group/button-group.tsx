import React from "react";
import { classNames } from "../../util/class-names";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children?: React.ReactNode;
    type: "button" | "submit" | "reset";
    isActive?: boolean;
}

const Button = ({ children, type, isActive, ...props }: ButtonProps) => {
    return (
        <button
            data-slot="group-button"
            // eslint-disable-next-line react/button-has-type
            type={type}
            className={classNames(
                "relative -ml-px inline-flex bg-neutral-0 px-4 py-2 text-xs text-neutral-700  ring-1 ring-inset ring-neutral-400 hover:bg-neutral-100 hover:text-neutral-800 focus:z-10 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-primary-200 active:bg-neutral-200 disabled:bg-neutral-0 disabled:text-neutral-500",
                isActive &&
                    "bg-primary-50 text-primary-500 hover:bg-primary-50 hover:text-primary-500 active:bg-primary-50 disabled:bg-neutral-100 disabled:text-neutral-500"
            )}
            {...props}
        >
            {children}
        </button>
    );
};

interface ButtonGroupProps {
    children?: React.ReactNode;
}

const ButtonGroup = ({ children }: ButtonGroupProps) => {
    return (
        <div className="isolate inline-flex [&>[data-slot=group-button]:first-of-type]:ml-0 [&>[data-slot=group-button]:first-of-type]:rounded-l  [&>[data-slot=group-button]:last-of-type]:rounded-r">
            {children}
        </div>
    );
};

ButtonGroup.Button = Button;

export { ButtonGroup };
