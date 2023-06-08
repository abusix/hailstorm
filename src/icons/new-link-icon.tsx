import * as React from 'react';
import { SVGProps } from 'react';
const SvgNewLinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.5 12a2.5 2.5 0 0 0-2.45 2h-7.1a2.5 2.5 0 1 0 0 1h7.1a2.5 2.5 0 1 0 2.45-3zM19 5h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgNewLinkIcon;
