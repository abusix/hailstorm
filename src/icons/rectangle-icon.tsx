import * as React from 'react';
import { SVGProps } from 'react';

const SvgRectangleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" {...props}>
        <path
            fillRule="evenodd"
            d="M1 4h18c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1Zm1 2v8h16V6H2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgRectangleIcon;
