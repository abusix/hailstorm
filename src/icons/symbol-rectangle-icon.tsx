import * as React from 'react';
import { SVGProps } from 'react';

const SvgSymbolRectangleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" {...props}>
        <path
            fillRule="evenodd"
            d="M16 5H4c-.5 0-1 .5-1 1v8c0 .5.5 1 1 1h12c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSymbolRectangleIcon;
