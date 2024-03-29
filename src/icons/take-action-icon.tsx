import * as React from "react";
import type { SVGProps } from "react";

const SvgTakeActionIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5 7c.28 0 .53-.11.71-.29l5-5A1.003 1.003 0 0 0 9.29.29l-5 5A1.003 1.003 0 0 0 5 7m6 6a1.003 1.003 0 0 0 1.71.71l5-5a1.003 1.003 0 0 0-1.42-1.42l-5 5c-.18.18-.29.43-.29.71m8 5h-1c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1m-9-6 6-6-1.29-1.29a1.003 1.003 0 0 0-1.42-1.42L12 2 6 8l1.29 1.29-7 7a1.003 1.003 0 0 0 1.42 1.42l7-7z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgTakeActionIcon;
