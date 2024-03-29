import * as React from "react";
import type { SVGProps } from "react";

const SvgCircleArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m.71-13.71C10.53 4.11 10.28 4 10 4s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L9 7.41V15c0 .55.45 1 1 1s1-.45 1-1V7.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgCircleArrowUpIcon;
