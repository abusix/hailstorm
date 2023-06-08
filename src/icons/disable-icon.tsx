import * as React from 'react';
import { SVGProps } from 'react';

const SvgDisableIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM2 10c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L3.69 14.9A7.902 7.902 0 0 1 2 10zm8 8c-1.85 0-3.55-.63-4.9-1.69L16.31 5.1A7.902 7.902 0 0 1 18 10c0 4.42-3.58 8-8 8z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgDisableIcon;
