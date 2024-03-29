import * as React from "react";
import type { SVGProps } from "react";

const SvgStopwatchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M10 6a6 6 0 1 0 6 6h-6zm-.998-1.938A1.015 1.015 0 0 1 9 4V2H7a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2h-2v2c0 .02 0 .041-.002.062A8.001 8.001 0 0 1 10 20a8 8 0 0 1-.998-15.938"
        />
    </svg>
);
export default SvgStopwatchIcon;
