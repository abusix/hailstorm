import * as React from "react";
import type { SVGProps } from "react";

const SvgPowerIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10 10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S9 .45 9 1v8c0 .55.45 1 1 1m3-7.45v2.16c2.36 1.12 4 3.5 4 6.29 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.17 4-6.29V2.55C3.51 3.79 1 7.09 1 11a9 9 0 0 0 18 0c0-3.91-2.51-7.21-6-8.45"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgPowerIcon;
