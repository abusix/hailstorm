import * as React from "react";
import type { SVGProps } from "react";

const SvgLessThanIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="m7.162 10 9.154 3.052a1 1 0 0 1-.632 1.897l-12-4c-.912-.304-.912-1.594 0-1.897l12-4a1 1 0 0 1 .632 1.897z" />
    </svg>
);
export default SvgLessThanIcon;
