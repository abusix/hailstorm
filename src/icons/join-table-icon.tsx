import * as React from "react";
import type { SVGProps } from "react";

const SvgJoinTableIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M19 6h-4V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h4v4c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1M6 12H2V9h4zm0-4H2V5h4zm7 9H7v-3h6zm0-4H7V9h6zm0-5H7V5h6zm5 9h-4v-3h4zm0-4h-4v-3h4z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgJoinTableIcon;
