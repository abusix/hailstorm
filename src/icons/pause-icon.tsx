import * as React from "react";
import type { SVGProps } from "react";

const SvgPauseIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7 3H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m9 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgPauseIcon;
