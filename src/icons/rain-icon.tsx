import * as React from "react";
import type { SVGProps } from "react";

const SvgRainIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M4 10a3 3 0 1 1 1.065-5.806A5.001 5.001 0 0 1 14.63 3.11 3.5 3.5 0 1 1 15.5 10H10zm0 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m9 1a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm3-1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-7 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgRainIcon;
