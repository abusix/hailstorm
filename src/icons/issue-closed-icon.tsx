import * as React from "react";
import type { SVGProps } from "react";

const SvgIssueClosedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M15.364 5.9a.997.997 0 0 1-.707-.293l-2.121-2.122a1 1 0 1 1 1.414-1.414l1.414 1.414L18.192.657a1 1 0 0 1 1.414 1.414l-3.535 3.536a.997.997 0 0 1-.707.292M11.78.157a3.002 3.002 0 0 0-1.437 1.85 8 8 0 1 0 7.1 5.055l.042-.042 1.472-1.472A9.959 9.959 0 0 1 20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0c.608 0 1.202.054 1.78.158M11 16H9v-2h2zm0-3H9V4h2z" />
    </svg>
);
export default SvgIssueClosedIcon;
