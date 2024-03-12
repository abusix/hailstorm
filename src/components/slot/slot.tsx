import React from "react";
import { classNames } from "../../util/class-names";

export type AsChildProps<DefaultElementProps> =
    | ({ asChild?: false } & DefaultElementProps)
    | { asChild: true; children: React.ReactNode };

export const Slot = ({
    children,
    ...props
}: React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
}) => {
    if (React.isValidElement(children)) {
        return React.cloneElement(children, {
            ...props,
            ...children.props,
            style: {
                ...props.style,
                ...children.props.style,
            },
            className: classNames(props.className, props.className, children.props.className),
        });
    }

    if (React.Children.count(children) > 1) {
        React.Children.only(null);
    }

    return null;
};
