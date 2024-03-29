import * as React from "react";
import type { SVGProps } from "react";

const SvgProjectsIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M18 4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h16zm-2-3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12zm3 6H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m-5 7c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2h1v2h6v-2h1z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgProjectsIcon;
