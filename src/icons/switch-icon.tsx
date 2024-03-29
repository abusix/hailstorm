import * as React from "react";
import type { SVGProps } from "react";

const SvgSwitchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="m12.293 2.293 1.414 1.414-7.127 7.129a3.5 3.5 0 1 1-1.415-1.415zM16.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m-13 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        />
    </svg>
);
export default SvgSwitchIcon;
