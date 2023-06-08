import React from 'react';
import { ChevronDownIcon, HelpIcon } from '../../../icons';

export const TopBarHelpButton = () => {
    return (
        <div className="flex gap-1">
            <HelpIcon className="h-4 w-4 fill-primary-200" />
            <ChevronDownIcon className="h-4 w-4 fill-neutral-400" />
        </div>
    );
};
