import * as React from "react";
import type { SVGProps } from "react";

const SvgFilterKeepIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L5 7.41V16a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7m4 11c-.28 0-.53.11-.71.29L15 16.59l-1.29-1.29A.965.965 0 0 0 13 15a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 19 13"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFilterKeepIcon;
