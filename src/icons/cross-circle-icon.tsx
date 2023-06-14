import * as React from "react";
import { SVGProps } from "react";

const SvgCrossCircleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm4.7-13.29L11.41 10l3.3 3.29A1.003 1.003 0 0 1 14 15c-.28 0-.53-.11-.71-.3L10 11.41l-3.29 3.3A1.003 1.003 0 0 1 5 14c0-.28.11-.53.3-.71L8.59 10l-3.3-3.29a1.003 1.003 0 0 1 1.42-1.42L10 8.59l3.29-3.3A1.003 1.003 0 0 1 15 6c0 .28-.11.53-.3.71Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgCrossCircleIcon;
