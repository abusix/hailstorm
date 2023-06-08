import * as React from 'react';
import { SVGProps } from 'react';

const SvgIssueIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" {...props}>
        <path
            fillRule="evenodd"
            d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-2H9v-2h2v2Zm0-3H9V4h2v9Z"
        />
    </svg>
);
export default SvgIssueIcon;
