import * as React from 'react';
import { SVGProps } from 'react';

const SvgMountainIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" {...props}>
        <path
            fillRule="evenodd"
            d="M20 16H4l7-11h1l2 2h1l5 9Zm-4-5-1.5-3h-1l-1-1-1-1L8 11.5l3-1.5 1 1 1-1 3 1ZM8.055 8 2.79 16H0l7-8h1.055Z"
        />
    </svg>
);
export default SvgMountainIcon;
