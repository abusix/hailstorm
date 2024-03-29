import * as React from "react";
import type { SVGProps } from "react";

const SvgColumnLayoutIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1M5 17H2V3h3zm4 0H6V3h3zm9 0h-8V3h8z" />
    </svg>
);
export default SvgColumnLayoutIcon;
