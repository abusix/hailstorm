import * as React from "react";
import type { SVGProps } from "react";

const SvgFilterRemoveIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L5 7.41V16a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7m2.91 13.5 1.79-1.79c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-1.79 1.79-1.79-1.79a1.003 1.003 0 0 0-1.42 1.42l1.79 1.79-1.79 1.79a1.003 1.003 0 0 0 1.42 1.42l1.79-1.79 1.79 1.79a1.003 1.003 0 0 0 1.42-1.42z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFilterRemoveIcon;
