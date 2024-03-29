import * as React from "react";
import type { SVGProps } from "react";

const SvgCircleArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15 9H7.41L9.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L7.41 11H15c.55 0 1-.45 1-1s-.45-1-1-1m-5-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgCircleArrowLeftIcon;
