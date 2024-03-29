import * as React from "react";
import type { SVGProps } from "react";

const SvgPrintIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14 16H6v-4H4v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5h-2zm2-13c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12zm3 2H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h2v-3h14v3h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-1 4h-2V7h2z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgPrintIcon;
