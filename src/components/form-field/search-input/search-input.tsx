import React, { useCallback, useRef } from "react";
import { classNames } from "../../../util/class-names";
import CrossIcon from "../../../icons/cross-icon";
import SearchIcon from "../../../icons/search-icon";

export interface SearchInputProps extends React.ComponentPropsWithoutRef<"input"> {
    autoSelect?: boolean;
    ariaDescribedBy?: string;
    error?: boolean;
    onClear: () => void;
}

export const SearchInput = ({
    ariaDescribedBy,
    readOnly,
    autoSelect,
    onClear,
    error,
    value,
    disabled,
    className,
    ...props
}: SearchInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const isClearIconShown = !readOnly && !disabled && value !== undefined && value !== "";

    const handleAutoSelection = useCallback(() => {
        if (autoSelect && inputRef.current) {
            inputRef.current.select();
        }
    }, [autoSelect]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                event.stopPropagation();

                onClear();
            }
        },
        [onClear]
    );

    return (
        <div className={classNames("relative w-full")}>
            <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3"
                aria-hidden="true"
            >
                <SearchIcon className="text-gray-400 h-3.5 w-3.5 fill-neutral-600" />
            </div>

            <input
                ref={inputRef}
                aria-describedby={ariaDescribedBy}
                onMouseOver={handleAutoSelection}
                onFocus={handleAutoSelection}
                onClick={handleAutoSelection}
                type="search"
                className={classNames(
                    "paragraph-100 relative block h-8 w-full rounded border border-neutral-400 px-9 py-2 text-neutral-800 placeholder:text-neutral-600 focus:outline-none",
                    readOnly && "bg-neutral-100",
                    disabled && "cursor-not-allowed bg-neutral-100 text-neutral-600",
                    !error &&
                        !disabled &&
                        "hover:border-neutral-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-200",
                    error && !disabled && "border-danger-500",
                    className
                )}
                readOnly={readOnly}
                disabled={disabled}
                value={value}
                {...props}
            />

            {isClearIconShown ? (
                <div
                    tabIndex={0}
                    onClick={onClear}
                    onKeyDown={handleKeyDown}
                    className="absolute right-0 top-1/2 z-10 mr-1.5 flex h-5 w-5 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded border border-transparent bg-neutral-100 hover:border-neutral-300"
                    aria-label="Clear Search Input"
                    role="button"
                >
                    <CrossIcon className="h-3.5 w-3.5 fill-neutral-600" />
                </div>
            ) : null}
        </div>
    );
};
