import * as React from "react";
import type { SVGProps } from "react";

const SvgUndoIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m9-9H3.41L5.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C.11 5.47 0 5.72 0 6c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L3.41 7H14c2.21 0 4 1.79 4 4s-1.79 4-4 4H9v2h5c3.31 0 6-2.69 6-6s-2.69-6-6-6"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgUndoIcon;
