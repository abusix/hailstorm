import * as React from "react";
import type { SVGProps } from "react";

const SvgDragHandleVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6m0 5c-.83 0-1.5.67-1.5 1.5S6.67 14 7.5 14 9 13.33 9 12.5 8.33 11 7.5 11m0 5c-.83 0-1.5.67-1.5 1.5S6.67 19 7.5 19 9 18.33 9 17.5 8.33 16 7.5 16m5-12c.83 0 1.5-.67 1.5-1.5S13.33 1 12.5 1 11 1.67 11 2.5 11.67 4 12.5 4m-5-3C6.67 1 6 1.67 6 2.5S6.67 4 7.5 4 9 3.33 9 2.5 8.33 1 7.5 1m5 10c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-10c-.83 0-1.5.67-1.5 1.5S11.67 9 12.5 9 14 8.33 14 7.5 13.33 6 12.5 6"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgDragHandleVerticalIcon;
