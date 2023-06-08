import * as React from 'react';
import { SVGProps } from 'react';
const SvgTargetIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" {...props}>
        <path d="M9 5a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0V5Zm3 4a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2h-3Zm-8 1a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Zm6 1a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1Z" />
        <path
            fillRule="evenodd"
            d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgTargetIcon;
