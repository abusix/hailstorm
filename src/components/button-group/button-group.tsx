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
                "bg-bg-primary focus:outline-border-brand disabled:bg-bg-primary text-text-primary ring-border-secondary hover:bg-bg-primary-hover hover:text-text-secondary-hover active:bg-bg-primary-pressed disabled:text-text-disabled relative -ml-px inline-flex px-4 py-2 font-medium ring-1 ring-inset focus:z-10 focus:outline-2 focus:outline-offset-0 focus:outline-solid",
                isActive &&
                    "bg-bg-brand-subtle text-text-inverse hover:bg-bg-brand-subtle hover:text-text-inverse active:bg-bg-brand-subtle disabled:bg-bg-disabled disabled:text-text-disabled"
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
        <div className="isolate inline-flex [&>[data-slot=group-button]:first-of-type]:ml-0 [&>[data-slot=group-button]:first-of-type]:rounded-l [&>[data-slot=group-button]:last-of-type]:rounded-r">
            {children}
        </div>
    );
};

ButtonGroup.Button = Button;

export { ButtonGroup };
