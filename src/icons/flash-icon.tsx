import * as React from "react";
import type { SVGProps } from "react";

const SvgFlashIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.96 6.37a1.003 1.003 0 0 0 1.42-1.42l-2-2a1.07 1.07 0 0 0-.71-.28 1.003 1.003 0 0 0-.71 1.71zm9.37.3c.28 0 .53-.11.71-.29l2-2a1.003 1.003 0 0 0-1.42-1.42l-2 2a1.003 1.003 0 0 0 .71 1.71M10 5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S9 .45 9 1v3c0 .55.45 1 1 1m-5 5c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1m14-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1m-9-3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m5.04 1.63a1.003 1.003 0 0 0-1.42 1.42l2 2a1.003 1.003 0 0 0 1.42-1.42zM10 15c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1m-4.33-1.67c-.28 0-.53.11-.71.29l-2 2a1.003 1.003 0 0 0 1.42 1.42l2-2a1.003 1.003 0 0 0-.71-1.71"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFlashIcon;
