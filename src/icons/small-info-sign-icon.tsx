import * as React from "react";
import type { SVGProps } from "react";

const SvgSmallInfoSignIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-6-5v2H9V5zm0 3v6h1v1H8v-1h1V9H8V8z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSmallInfoSignIcon;
