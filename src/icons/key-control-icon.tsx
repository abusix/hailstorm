import * as React from "react";
import type { SVGProps } from "react";

const SvgKeyControlIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m16.71 7.29-6-6C10.53 1.11 10.28 1 10 1s-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42L10 3.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgKeyControlIcon;
