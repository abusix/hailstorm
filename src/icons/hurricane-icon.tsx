import * as React from "react";
import type { SVGProps } from "react";

const SvgHurricaneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M0 14c1.648.775 3 1 4 1-1-1-2-3.112-2-5a5.098 5.098 0 0 0 0-.045C2 5.17 6.201 1 11.172 1c3.206 0 6.9.667 8.828 5-1.648-.775-3-1-4-1 1 1 2 3.112 2 5v.045C18 14.83 13.799 19 8.828 19c-3.206 0-6.9-.667-8.828-5m10-7a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgHurricaneIcon;
