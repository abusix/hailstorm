import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeleteIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15 6a1.003 1.003 0 0 0-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L11.41 10l3.29-3.29c.19-.18.3-.43.3-.71zm-5-6C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgDeleteIcon;
