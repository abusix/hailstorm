import React from "react";
import { Switch as HeadlessSwitch } from "@headlessui/react";
import classNames from "../../util/class-names";

export interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  ariaLabel: string;
}

export const Toggle = ({
  checked = false,
  onChange,
  disabled = false,
  ariaLabel,
}: ToggleProps) => {
  return (
    <HeadlessSwitch
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      className={classNames(
        "relative inline-flex h-4 w-7 items-center rounded-full",
        !checked &&
          "bg-neutral-400 hover:bg-neutral-500 disabled:bg-neutral-100",
        checked && "bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-100"
      )}
    >
      <span className="sr-only">{ariaLabel}</span>
      <span
        className={classNames(
          "inline-block h-3 w-3 transform rounded-full transition",
          checked ? "translate-x-3.5" : "translate-x-0.5",
          checked && disabled && "bg-neutral-400 ",
          checked && !disabled && "bg-neutral-0",
          !checked && disabled && "bg-neutral-400",
          !checked && !disabled && "bg-neutral-0"
        )}
      />
    </HeadlessSwitch>
  );
};
