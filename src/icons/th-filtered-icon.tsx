import * as React from "react";
import type { SVGProps } from "react";

const SvgThFilteredIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="m17.333 10 1.435-1.722a1 1 0 0 0 .232-.64V4.85l1-.9V18c0 .5-.5 1-1 1H1c-.6 0-1-.5-1-1V2c0-.5.4-1 1-1h6.722L12 4.85V6H8v3h4v1H8v3h10v-3zM7 17v-3H2v3zm0-4v-3H2v3zm0-4V6H2v3zm11 8v-3H8v3z" />
        <path d="M19.35 0a.642.642 0 0 1 .46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V4.13L11.19 1.1a.642.642 0 0 1 .45-1.1z" />
    </svg>
);
export default SvgThFilteredIcon;
