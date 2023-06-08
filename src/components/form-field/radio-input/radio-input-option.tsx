import { RadioGroup } from '@headlessui/react';
import React from 'react';
import classNames from '../../../util/class-names';

export interface RadioInputOptionProps {
    children: React.ReactNode;
    value: string;
    disabled?: boolean;
}

export const RadioInputOption = ({ children, value, disabled }: RadioInputOptionProps) => {
    return (
        <RadioGroup.Option value={value} className="max-w-fit cursor-pointer focus:outline-none" disabled={disabled}>
            {({ checked, disabled: optionDisabled }) => (
                <div className="flex items-center gap-3">
                    {checked ? (
                        <span
                            className={classNames(
                                'relative inline-block h-4 w-4 rounded-full bg-primary-400 hover:bg-primary-500 active:bg-primary-600',
                                optionDisabled && 'bg-neutral-100 hover:bg-neutral-100 active:bg-neutral-100'
                            )}
                        >
                            <span
                                className={classNames(
                                    'absolute inset-0 m-auto block h-2 w-2 rounded-full bg-neutral-0',
                                    optionDisabled && 'bg-neutral-500'
                                )}
                            />
                        </span>
                    ) : (
                        <span
                            className={classNames(
                                'inline-block h-4 w-4 rounded-full border border-neutral-400 hover:border-neutral-600 active:border-neutral-500 active:bg-neutral-100',
                                optionDisabled && 'border-0 bg-neutral-100'
                            )}
                        />
                    )}
                    <p className={classNames('paragraph-200', optionDisabled && 'text-neutral-600')}>{children}</p>
                </div>
            )}
        </RadioGroup.Option>
    );
};
