import React, { useRef } from "react";
import { classNames } from "../../../util/class-names";

const targetAttachmentIdentifier = "target-field";

// note: these strings need to be static,
// template literals aren’t recognized by tailwind,
// so we can’t use ${targetAttachmentIdentifier} here
const formFieldGroupStyles = classNames(
    // first element
    `[.group.form-field-group_&:first-child_.target-field]:rounded-r-none [.group.form-field-group_&:first-child_.target-field]:border-r-0`,
    // elements in between
    `[.group.form-field-group_&:not(:first-child):not(:last-child)_.target-field]:rounded-none [.group.form-field-group_&:not(:first-child):not(:last-child)_.target-field]:border-r-0`,
    // last element
    `[.group.form-field-group_&:last-child_.target-field]:border-l-1 [.group.form-field-group_&:last-child_.target-field]:rounded-l-none`
);

export interface TextInputProps {
    id: string;
    placeholder: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    type?: "text" | "password" | "email";
    autoSelect?: boolean;
    ariaDescribedBy?: string;
    LeftIcon?: React.ElementType;
    error?: boolean;
    disabled?: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const TextInput = ({
    id,
    placeholder,
    value,
    onChange,
    ariaDescribedBy,
    type = "text",
    LeftIcon,
    readOnly,
    autoSelect,
    error,
    disabled,
    onBlur,
    onKeyDown,
    onKeyUp,
}: TextInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleAutoSelection() {
        if (autoSelect && inputRef.current) {
            inputRef.current.select();
        }
    }

    return (
        <div className={classNames("relative w-full", formFieldGroupStyles)}>
            {LeftIcon ? (
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10"
                    aria-hidden="true"
                >
                    <LeftIcon className="text-gray-400 h-3.5 w-3.5 fill-neutral-600" />
                </div>
            ) : null}

            <input
                ref={inputRef}
                id={id}
                name={id}
                value={value}
                readOnly={readOnly}
                onChange={onChange}
                placeholder={placeholder}
                aria-describedby={ariaDescribedBy}
                onMouseOver={autoSelect ? handleAutoSelection : undefined}
                onFocus={autoSelect ? handleAutoSelection : undefined}
                onClick={autoSelect ? handleAutoSelection : undefined}
                type={type}
                className={classNames(
                    targetAttachmentIdentifier,
                    "paragraph-100 relative block h-8 w-full rounded border border-neutral-400 py-2 pl-3 pr-2 text-neutral-800 placeholder:text-neutral-600 focus:outline-none",
                    LeftIcon && "pl-9",
                    readOnly && "bg-neutral-100",
                    disabled && "cursor-not-allowed bg-neutral-100 text-neutral-600",
                    !error &&
                        !disabled &&
                        "hover:border-neutral-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-200",
                    error && !disabled && "border-danger-500"
                )}
                disabled={disabled}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
            />
        </div>
    );
};
