import * as React from "react";
import type { SVGProps } from "react";

const SvgAsteriskIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m18.52 14.17.01-.02L11.89 10l6.64-4.15-.01-.02A.97.97 0 0 0 19 5c0-.55-.45-1-1-1-.2 0-.37.07-.52.17l-.01-.02L11 8.2V1c0-.55-.45-1-1-1S9 .45 9 1v7.2L2.53 4.15l-.01.02A.922.922 0 0 0 2 4c-.55 0-1 .45-1 1 0 .36.2.66.48.83l-.01.02L8.11 10l-6.64 4.15.01.02A.97.97 0 0 0 1 15c0 .55.45 1 1 1 .2 0 .37-.07.52-.17l.01.02L9 11.8V19c0 .55.45 1 1 1s1-.45 1-1v-7.2l6.47 4.04.01-.02c.15.11.32.18.52.18.55 0 1-.45 1-1 0-.36-.2-.66-.48-.83"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgAsteriskIcon;
