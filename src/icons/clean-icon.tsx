import * as React from "react";
import { SVGProps } from "react";

const SvgCleanIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M7 0 5 5 0 6.998 5 9l2 5 2-5 5-1.995L9 5zm8 10-1.5 3.496-3.5 1.499 3.5 1.498L15 20l1.5-3.507L20 15l-3.5-1.504z"
        />
    </svg>
);
export default SvgCleanIcon;
