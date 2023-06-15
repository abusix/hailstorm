import * as React from "react";
import { SVGProps } from "react";

const SvgPieChartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M9 .98c-4.5.5-8 4.31-8 8.94 0 4.97 4.03 9.04 9 9.04 4.63 0 8.44-3.96 8.94-7.96H9V.98z" />
        <path d="M10-.08V10h10C20 4 15.52-.08 10-.08z" />
    </svg>
);
export default SvgPieChartIcon;
