import * as React from "react";
import type { SVGProps } from "react";

const SvgFormIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M2 13v4h4v-4zm-1-2h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1m11-7h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1M8 1a1.003 1.003 0 0 1 .71 1.71l-5 6C3.53 8.89 3.28 9 3 9s-.53-.11-.71-.29l-2-2a1.003 1.003 0 0 1 1.42-1.42L3 6.59l4.29-5.3C7.47 1.11 7.72 1 8 1m4 13h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1" />
    </svg>
);
export default SvgFormIcon;
