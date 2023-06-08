import * as React from 'react';
import { SVGProps } from 'react';

const SvgDoubleChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 11c.28 0 .53-.11.71-.29L10 5.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6A.997.997 0 0 0 10 3c-.28 0-.53.11-.71.29l-6 6A1.003 1.003 0 0 0 4 11zm6.71-1.71A.997.997 0 0 0 10 9c-.28 0-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgDoubleChevronUpIcon;
