import * as React from "react";
import type { SVGProps } from "react";

const SvgLabTestIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M13 2a1 1 0 0 1 0 2v4l4 8v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1l4-8V4a1 1 0 1 1 0-2zm-2 2H9v4l-2 4h6l-2-4z"
        />
    </svg>
);
export default SvgLabTestIcon;
