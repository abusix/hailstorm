import * as React from "react";
import type { SVGProps } from "react";

const SvgTrainIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M16 18h-2l2 2H4l.12-.12L6 18H4c-1.1 0-2-.9-2-2V2c0-1.1 3.58-2 8-2s8 .9 8 2v14c0 1.1-.9 2-2 2M5.5 15c.83 0 1.5-.67 1.5-1.5S6.33 12 5.5 12 4 12.67 4 13.5 4.67 15 5.5 15M9 3H4v6h5zm7 0h-5v6h5zm-1.5 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgTrainIcon;
