import * as React from "react";
import type { SVGProps } from "react";

const SvgPercentageIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15 10c-1.66 0-3 1.34-3 3v2c0 1.66 1.34 3 3 3s3-1.34 3-3v-2c0-1.66-1.34-3-3-3m1 5c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1zM8 7V5c0-1.66-1.34-3-3-3S2 3.34 2 5v2c0 1.66 1.34 3 3 3s3-1.34 3-3M4 7V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1m11-4a1.003 1.003 0 0 0-1.88-.48L5.14 16.49a1.003 1.003 0 1 0 1.74.99l7.99-13.97c.08-.15.13-.32.13-.51"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgPercentageIcon;
