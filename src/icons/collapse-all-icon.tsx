import * as React from "react";
import type { SVGProps } from "react";

const SvgCollapseAllIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 0 0-1.42-1.42L10 6.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42zm1.42 2.58c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgCollapseAllIcon;
