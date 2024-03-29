import * as React from "react";
import type { SVGProps } from "react";

const SvgLabelIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3 12h14v-1H3zm11-9H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V9zm4 12H2V5h11v3H3v1h10v1h5zm-4-6V5l4 4z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgLabelIcon;
