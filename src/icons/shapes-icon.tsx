import * as React from "react";
import type { SVGProps } from "react";

const SvgShapesIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M7.88 11.12a.958.958 0 0 1 1.277.33l3.719 6.207c.081.136.124.29.124.447 0 .495-.419.896-.936.896H4.936a.969.969 0 0 1-.436-.103.878.878 0 0 1-.392-1.21l3.409-6.208a.915.915 0 0 1 .362-.36M15 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8M8 1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
        />
    </svg>
);
export default SvgShapesIcon;
