import * as React from "react";
import { SVGProps } from "react";

const SvgDrawerLeftIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M9 0a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h8ZM8 2H2v16h6V2Zm2 7h6.59L14.3 6.71A.965.965 0 0 1 14 6a1.003 1.003 0 0 1 1.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 0 1-1.42-1.42l2.3-2.29H10V9Z" />
    </svg>
);
export default SvgDrawerLeftIcon;