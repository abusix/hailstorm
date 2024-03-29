import * as React from "react";
import type { SVGProps } from "react";

const SvgIpAddressIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M6 3.66C6 5.69 10 11 10 11s4-5.31 4-7.34C13.99 1.64 12.21 0 10 0S6 1.64 6 3.66M8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m6 9.5V13h-4v1h3v2h-2v1h3zM3 12h14c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1m4 1v6h1v-6zm3 1v5h1v-5z" />
    </svg>
);
export default SvgIpAddressIcon;
