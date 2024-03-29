import * as React from "react";
import type { SVGProps } from "react";

const SvgHeatGridIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14 12h6V8h-6zM0 12h6V8H0zm1-3h4v2H1zm-1 7c0 .55.45 1 1 1h5v-4H0zM19 3h-5v4h6V4c0-.55-.45-1-1-1m0 3h-4V4h4zM0 4v3h6V3H1c-.55 0-1 .45-1 1m7 3h6V3H7zm7 10h5c.55 0 1-.45 1-1v-3h-6zm-7 0h6v-4H7zm1-3h4v2H8zm-1-2h6V8H7z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgHeatGridIcon;
