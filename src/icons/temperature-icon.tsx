import * as React from 'react';
import { SVGProps } from 'react';

const SvgTemperatureIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" {...props}>
        <path
            fillRule="evenodd"
            d="M11 0a2 2 0 0 0-2 2v10.535a4 4 0 1 0 4 0V2a2 2 0 0 0-2-2ZM3 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM3.5 8a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM5 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm.5 5.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgTemperatureIcon;
