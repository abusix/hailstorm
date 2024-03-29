import * as React from "react";
import type { SVGProps } from "react";

const SvgPanelTableIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M19 1H1c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1m-9 11H7V9h3zm0-4H7V5h3zm-8 8V3h4v13zm5 0v-3h3v3zm11 0h-7v-3h7zm0-4h-7V9h7zm0-4h-7V5h7z" />
    </svg>
);
export default SvgPanelTableIcon;
