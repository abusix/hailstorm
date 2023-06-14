import * as React from "react";
import { SVGProps } from "react";

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
            d="M1 1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm1 2v13h16V3H2Zm9 0h1v13h-1V3Zm2 7h3.952v1H13v-1Zm0 2h3.952v1H13v-1Zm0 2h3.952v1H13v-1Zm0-6h3.952v1H13V8Zm0-2h3.952v1H13V6Zm0-2h3.952v1H13V4Z"
        />
    </svg>
);
export default SvgPanelStatsIcon;
