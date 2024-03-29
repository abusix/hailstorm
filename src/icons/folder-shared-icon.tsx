import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderSharedIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11 4H9.41l-1.7-1.71A.997.997 0 0 0 7 2H1c-.55 0-1 .45-1 1v3h11.78C11.3 5.47 11 4.77 11 4m8-1h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L12.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1m-2.46 7.7-1.42 1.42a2.996 2.996 0 1 1-4.24-4.24l.88-.88H0v10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-5.18c-.31.11-.65.18-1 .18-1.02 0-1.92-.52-2.46-1.3"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFolderSharedIcon;
