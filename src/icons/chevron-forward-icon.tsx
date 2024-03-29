import * as React from "react";
import type { SVGProps } from "react";

const SvgChevronForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13 3c-.55 0-1 .45-1 1v4.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l5.29-5.3V16c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgChevronForwardIcon;
