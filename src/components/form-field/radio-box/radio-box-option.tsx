import { RadioGroup } from "@headlessui/react";
import React from "react";
import { classNames } from "../../../util/class-names";
import { RecommendationTag } from "../../recommendation-tag/recommendation-tag";

export interface RadioBoxOptionProps {
    children: React.ReactNode;
    value: string;
    disabled?: boolean;
    recommendationText?: string;
    className?: string;
}

export const radioBoxContainerStyles = {
    base: "group relative flex items-center gap-3 rounded-lg bg-neutral-0 border p-4 border-neutral-300 hover:border-primary-500 hover:bg-primary-50",
    checked: "border-primary-500 bg-primary-500 hover:bg-primary-500 hover:text-neutral-0",
    disabled:
        "border-neutral-400 bg-neutral-100 group-hover:border-neutral-400 group-hover:bg-neutral-100 hover:border-neutral-400 hover:bg-neutral-100",
};

export const radioBoxCircleStyles = {
    base: "relative inline-block h-4 w-4 shrink-0 rounded-full bg-neutral-0 border border-neutral-400",
    unchecked: "group-hover:border-primary-500 group-hover:bg-neutral-0",
    disabled: "bg-neutral-100 group-hover:border-neutral-400 group-hover:bg-neutral-100",
};

export const RadioBoxOption = ({
    children,
    value,
    disabled,
    recommendationText,
    className,
}: RadioBoxOptionProps) => {
    return (
        <RadioGroup.Option
            value={value}
            className="w-full cursor-pointer focus:outline-none"
            disabled={disabled}
        >
            {({ checked, disabled: optionDisabled }) => (
                <div
                    className={classNames(
                        radioBoxContainerStyles.base,
                        checked && radioBoxContainerStyles.checked,
                        optionDisabled && radioBoxContainerStyles.disabled
                    )}
                >
                    {recommendationText && (
                        <RecommendationTag>{recommendationText}</RecommendationTag>
                    )}

                    <div
                        className={classNames(
                            radioBoxCircleStyles.base,
                            !checked && radioBoxCircleStyles.unchecked,
                            optionDisabled && radioBoxCircleStyles.disabled
                        )}
                    >
                        {checked && (
                            <div
                                className={classNames(
                                    "absolute inset-0 m-auto block h-2 w-2 rounded-full bg-primary-500",
                                    optionDisabled && "bg-neutral-500"
                                )}
                            />
                        )}
                    </div>

                    <div
                        className={classNames(
                            "flex flex-col gap-2",
                            checked && "text-neutral-0",
                            optionDisabled && "text-neutral-600",
                            className
                        )}
                    >
                        {children}
                    </div>
                </div>
            )}
        </RadioGroup.Option>
    );
};
