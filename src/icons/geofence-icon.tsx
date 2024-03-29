import * as React from "react";
import type { SVGProps } from "react";

const SvgGeofenceIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m8 11 .075.003.126.017.111.03.111.044.098.052.096.067.09.08a.927.927 0 0 1 .097.112l.071.11.054.114.035.105.03.148L9 12v6a1 1 0 0 1-1.993.117L7 18v-3.586l-5.293 5.293a1 1 0 0 1-1.497-1.32l.083-.094L5.584 13h-3.58a1 1 0 0 1-.117-1.993L2.004 11zm3.018-11a1.003 1.003 0 0 1 .39.087l.12.063.031.02.1.078 8.027 7.026.062.064.068.086.044.068.064.128.04.117.024.113.011.108v.1l-.007.073-.019.103-.037.121-.039.09-.05.087-4.996 7.994a.997.997 0 0 1-.226.254l-.093.067-.095.053-.087.037-.125.037a1.018 1.018 0 0 1-.218.026H11v-5a3 3 0 0 0-2.824-2.995L8 9H3V6a1 1 0 0 1 .321-.734l.098-.08 7-5a1.01 1.01 0 0 1 .45-.178z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgGeofenceIcon;
