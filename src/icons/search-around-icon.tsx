import * as React from "react";
import type { SVGProps } from "react";

const SvgSearchAroundIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <circle cx={9.9} cy={9.9} r={3} />
        <path d="M3 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3m0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M3 0C1.3 0 0 1.3 0 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3m0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m14 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3m0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-19c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3m0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m-7 5L5 5" />
        <path d="m5.379 4.672 5.02 5.02-.707.707-5.02-5.02zM10 10l5-5" />
        <path d="m14.621 4.671.707.708-5.02 5.02-.707-.707zM10 10l5 5" />
        <path d="m10.379 9.671 5.02 5.02-.707.708-5.02-5.02zM10 10l-5 5" />
        <path d="m9.621 9.672.707.707-5.02 5.02-.707-.707z" />
    </svg>
);
export default SvgSearchAroundIcon;
