import * as React from "react";
import type { SVGProps } from "react";

const SvgManuallyEnteredDataIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1 12h4.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1m16.77-3.94 1.65-1.65c.36-.36.58-.86.58-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65zM1 4h12.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1M0 15c0 .55.45 1 1 1h.34l2-2H1c-.55 0-1 .45-1 1m1-7h8.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1m18 2h-.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1m0 4h-4.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1M4 19l4.41-1.59-2.81-2.79zM14.23 5.94l-7.65 7.65 2.83 2.83 7.65-7.65z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgManuallyEnteredDataIcon;
