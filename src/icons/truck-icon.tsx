import * as React from "react";
import type { SVGProps } from "react";

const SvgTruckIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M16 0a1 1 0 0 1 1 1v11a1 1 0 0 1 1 1v3h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H17v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H2v-3a1 1 0 0 1 1-1V1a1 1 0 1 1 2 0v3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V1a1 1 0 0 1 1-1m-4 10H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-7 4H4a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m11 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-4.5 0a.5.5 0 1 1 0 1h-3l-.09-.008A.5.5 0 0 1 8.5 14Zm0-1.5a.5.5 0 1 1 0 1h-3l-.09-.008a.5.5 0 0 1 .09-.992Zm0-1.5a.5.5 0 1 1 0 1h-3l-.09-.008A.5.5 0 0 1 8.5 11ZM14 5H6v3h8z"
        />
    </svg>
);
export default SvgTruckIcon;
