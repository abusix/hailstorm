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
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
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
                    "paragraph-100 relative block h-8 w-full rounded border border-neutral-400 py-2 pl-9 pr-8 text-neutral-800 placeholder:text-neutral-600 focus:outline-none",
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
                <div className="absolute inset-y-0 right-0 z-10 flex items-center justify-center pr-2">
                    <button
                        type="button"
                        aria-label="Clear search input"
                        tabIndex={0}
                        onClick={onClear}
                        onKeyDown={handleKeyDown}
                        className="rounded bg-neutral-100 p-0.5 hover:bg-neutral-200"
                    >
                        <CrossIcon className="h-3 w-3 fill-neutral-600" />
                    </button>
                </div>
            ) : null}
        </div>
    );
};
