import * as React from "react";
import type { SVGProps } from "react";

const SvgPlaybookIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <g clipPath="url(#clip0_328_94)">
            <path d="M1.707.293A1 1 0 0 0 .293 1.707L2.086 3.5.293 5.293a1 1 0 0 0 1.414 1.414L3.5 4.914l1.793 1.793a1 1 0 0 0 1.414-1.414L4.914 3.5l1.793-1.793A1 1 0 0 0 5.293.293L3.5 2.086z" />
            <path
                fillRule="evenodd"
                d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                clipRule="evenodd"
            />
            <path d="M18.29 5.7 16 3.41V8a3 3 0 0 1-3 3H4a1 1 0 0 0-1 1v7a1 1 0 1 1-2 0v-7a3 3 0 0 1 3-3h9a1 1 0 0 0 1-1V3.41l-2.29 2.3a1.003 1.003 0 0 1-1.42-1.42l4-4c.18-.18.43-.29.71-.29.28 0 .53.11.71.29l4 4A1.003 1.003 0 0 1 19 6c-.28 0-.53-.11-.71-.3" />
        </g>
    </svg>
);
export default SvgPlaybookIcon;
