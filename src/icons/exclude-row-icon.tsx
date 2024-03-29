import * as React from "react";
import type { SVGProps } from "react";

const SvgExcludeRowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1M0 13a1.003 1.003 0 0 0 1.71.71L4 11.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 0 0 .29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71m18-5h-7c-1.1 0-2 .9-2 2s.9 2 2 2h7c1.1 0 2-.9 2-2s-.9-2-2-2m1 9H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1" />
    </svg>
);
export default SvgExcludeRowIcon;
