import * as React from "react";
import type { SVGProps } from "react";

const SvgAddLocationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M10 0a1 1 0 0 1 0 2 8 8 0 1 0 8 8 1 1 0 0 1 2 0c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8m6-6c.6 0 1 .4 1 1v2h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v2c0 .6-.4 1-1 1s-1-.4-1-1V5h-2c-.6 0-1-.4-1-1 0-.5.4-1 1-1h2V1c0-.6.4-1 1-1"
        />
    </svg>
);
export default SvgAddLocationIcon;
