import * as React from "react";
import type { SVGProps } from "react";

const SvgAddClipIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M15 0a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0V6h-3a1 1 0 1 1 0-2h3V1a1 1 0 0 1 1-1M1 4a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6h3a1 1 0 0 0 0-2zM0 19a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2H2v-3a1 1 0 1 0-2 0zm15 1h-4a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m-7-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgAddClipIcon;
