import * as React from "react";
import type { SVGProps } from "react";

const SvgSimCardIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m16.71 5.29-5-5A.997.997 0 0 0 11 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.28-.11-.53-.29-.71M9 7h2v3H9zM6 7h2v3H6zm2 11H6v-3h2zm3 0H9v-3h2zm3 0h-2v-3h2zm0-4H6v-3h8zm0-4h-2V7h2z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSimCardIcon;
