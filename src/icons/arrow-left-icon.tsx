import * as React from "react";
import type { SVGProps } from "react";

const SvgArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M18 9H4.41L8.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L4.41 11H18c.55 0 1-.45 1-1s-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgArrowLeftIcon;
