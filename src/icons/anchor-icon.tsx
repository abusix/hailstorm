import * as React from "react";
import { SVGProps } from "react";

const SvgAnchorIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M11 5.83a3.001 3.001 0 1 0-2 0V7H6v2h3v8.917a6.003 6.003 0 0 1-4.985-5.488l.278.278a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414l.303-.303a8 8 0 0 0 15.98 0l.303.303a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414l.278-.278A6.003 6.003 0 0 1 11 17.917V9h3V7h-3V5.83ZM11 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgAnchorIcon;
