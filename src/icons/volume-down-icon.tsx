import * as React from "react";
import type { SVGProps } from "react";

const SvgVolumeDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m15.92 3.93-1.6 1.18A7.948 7.948 0 0 1 16 10c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.878 9.878 0 0 0 18 10c0-2.29-.78-4.39-2.08-6.07M11 3c-.28 0-.53.11-.71.29L7.59 6H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V4c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgVolumeDownIcon;
