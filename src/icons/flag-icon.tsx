import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlagIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M3 3c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm0-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm2 4.08v8.28c3.01-2.41 8.67 2.64 13 0V4.08C13.61 7.14 8.01 1 5 4.08z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFlagIcon;
