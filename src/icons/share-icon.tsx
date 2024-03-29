import * as React from "react";
import type { SVGProps } from "react";

const SvgShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15 18H2V5h8.76l2-2H1c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V7.24l-2 2zm4-18h-7c-.55 0-1 .45-1 1s.45 1 1 1h4.59l-7.3 7.29a1.003 1.003 0 0 0 1.42 1.42L18 3.41V8c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgShareIcon;
