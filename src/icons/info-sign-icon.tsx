import * as React from "react";
import type { SVGProps } from "react";

const SvgInfoSignIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0M9 4h2v2H9zm4 12H7v-1h2V8H8V7h3v8h2z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgInfoSignIcon;
