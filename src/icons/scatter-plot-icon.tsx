import * as React from "react";
import { SVGProps } from "react";

const SvgScatterPlotIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M9 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1 10H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM5 15c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgScatterPlotIcon;
