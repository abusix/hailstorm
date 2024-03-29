import * as React from "react";
import type { SVGProps } from "react";

const SvgPanelStatsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M1 1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m1 2v13h16V3zm9 0h1v13h-1zm2 7h3.952v1H13zm0 2h3.952v1H13zm0 2h3.952v1H13zm0-6h3.952v1H13zm0-2h3.952v1H13zm0-2h3.952v1H13z"
        />
    </svg>
);
export default SvgPanelStatsIcon;
