import React from "react";
import { useRef } from "react";
import classNames from "../../../util/class-names";

export interface TextInputProps {
  id: string;
  placeholder: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  type?: "text" | "password";
  autoSelect?: boolean;
  ariaDescribedBy?: string;
  LeftIcon?: React.ElementType;
  error?: boolean;
  disabled?: boolean;
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
}: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAutoSelection() {
    if (autoSelect && inputRef.current) {
      inputRef.current.select();
    }
  }

  return (
    <div className="relative w-full">
      {LeftIcon ? (
        <div
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          aria-hidden="true"
        >
          <LeftIcon className="text-gray-400 h-4 w-4 fill-neutral-600" />
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
          "paragraph-100 block w-full rounded border border-neutral-400 py-2 pl-3 pr-2 text-neutral-800 placeholder:text-neutral-600 focus:outline-none",
          LeftIcon && "pl-9",
          readOnly && "bg-neutral-100",
          disabled && "cursor-not-allowed bg-neutral-100 text-neutral-600",
          !error &&
            !disabled &&
            "hover:border-neutral-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-200",
          error && !disabled && "border-danger-500"
        )}
        disabled={disabled}
      />
    </div>
  );
};
