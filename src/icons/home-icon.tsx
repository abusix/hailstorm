import * as React from "react";
import type { SVGProps } from "react";

const SvgHomeIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2 12v7c0 .55.45 1 1 1h5v-7h4v7h5c.55 0 1-.45 1-1v-7l-8-8zm17.71-2.71L17 6.59V3c0-.55-.45-1-1-1s-1 .45-1 1v1.59L10.71.3C10.53.11 10.28 0 10 0s-.53.11-.71.29l-9 9a1.003 1.003 0 0 0 1.42 1.42L10 2.41l8.29 8.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgHomeIcon;
