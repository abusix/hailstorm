import * as React from "react";
import type { SVGProps } from "react";

const SvgMapIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m19.54 4.18.01-.02-6-4-.01.02C13.39.08 13.21 0 13 0s-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 0 0 1 0C.45 0 0 .45 0 1v14c0 .35.19.64.46.82l-.01.02 6 4 .01-.02c.15.1.33.18.54.18s.39-.08.54-.18l.01.02L13 16.2l5.45 3.63.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1V5c0-.35-.19-.64-.46-.82M6 17.13l-4-2.67V2.87l4 2.67zm6-2.67-4 2.67V5.54l4-2.67zm6 2.67-4-2.67V2.87l4 2.67z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgMapIcon;
