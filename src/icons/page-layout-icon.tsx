import * as React from "react";
import type { SVGProps } from "react";

const SvgPageLayoutIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1M7 17H2V8h5zm11 0H8V8h10zm0-10H2V3h16z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgPageLayoutIcon;
