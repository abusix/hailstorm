import * as React from "react";
import type { SVGProps } from "react";

const SvgCircleArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14 10c-.28 0-.53.11-.71.29L11 12.59V5c0-.55-.45-1-1-1s-1 .45-1 1v7.59L6.71 10.3A.965.965 0 0 0 6 10a1.003 1.003 0 0 0-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 14 10M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgCircleArrowDownIcon;
