import * as React from "react";
import type { SVGProps } from "react";

const SvgFuelIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M2.196 2H0v2h2c.317 0 .619.139.825.38l3.493 4.075-1.873 1.248a1 1 0 0 0-.445.832V18c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V7.1a1.1 1.1 0 0 0-.004-.1H20V3s0-1-1-1h-8c-.5 0-1 .5-1 1v3L8.12 7.254 4.463 3.035A3 3 0 0 0 2.196 2M18 4v2h-6V4z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFuelIcon;
