import * as React from "react";
import type { SVGProps } from "react";

const SvgKeyEnterIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M18 2c-.55 0-1 .45-1 1v5c0 2.21-1.79 4-4 4H4.41L6.7 9.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L4.41 14H13c3.31 0 6-2.69 6-6V3c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgKeyEnterIcon;
