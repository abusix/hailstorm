import * as React from "react";
import type { SVGProps } from "react";

const SvgDashboardIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M4 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m6-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m0-5C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m6-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-8 5c0 1.1.9 2 2 2s2-.9 2-2c0-.33-2-8-2-8s-2 7.67-2 8m6-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgDashboardIcon;
