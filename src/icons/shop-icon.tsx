import * as React from "react";
import type { SVGProps } from "react";

const SvgShopIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M17.94 3.63c-.01-.02-.01-.03-.02-.04l-.03-.09h-.01c-.18-.3-.49-.5-.86-.5h-14c-.42 0-.77.25-.92.61L0 8.5h.02a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0zM3.02 2h14c.55 0 1-.45 1-1s-.45-1-1-1h-14c-.55 0-1 .45-1 1s.44 1 1 1m13 14h-12v-4h-2v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-7h-2z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgShopIcon;
