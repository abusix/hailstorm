import * as React from "react";
import type { SVGProps } from "react";

const SvgThListIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M19 1H1c-.6 0-1 .5-1 1v16c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1m-1 16H2v-3h16zm0-4H2v-3h16zm0-4H2V6h16z" />
    </svg>
);
export default SvgThListIcon;
