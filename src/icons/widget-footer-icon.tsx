import * as React from "react";
import type { SVGProps } from "react";

const SvgWidgetFooterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M17 0H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1m-1 18H4v-4h12zm0-5H4V2h12z" />
    </svg>
);
export default SvgWidgetFooterIcon;
