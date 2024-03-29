import * as React from "react";
import type { SVGProps } from "react";

const SvgArchiveIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M16.434 0a1 1 0 0 1 .857.486L20 5v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5L2.709.486A1 1 0 0 1 3.566 0zM10 8c-.55 0-1 .45-1 1v4.58l-1.29-1.29-.081-.073A.996.996 0 0 0 7 11.99a1.003 1.003 0 0 0-.71 1.71l3 3 .096.084c.168.13.38.206.614.206.28 0 .53-.11.71-.29l3-3 .084-.096a1.003 1.003 0 0 0-1.504-1.324L11 13.58V9l-.007-.116A1.004 1.004 0 0 0 10 8m6-6H4L2 5.002h16z"
        />
    </svg>
);
export default SvgArchiveIcon;
