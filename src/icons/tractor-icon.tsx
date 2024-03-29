import * as React from "react";
import type { SVGProps } from "react";

const SvgTractorIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M4.5 11a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m11.499 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-11.5 1.571a1.928 1.928 0 1 0 0 3.857 1.928 1.928 0 0 0 0-3.857M16 14.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666M5.999 0C7.46 0 8.527.668 9 2l.851 4.256c1.433.096 2.82.217 4.147.362V2h2L16 6.862c.962.13 1.886.275 2.767.435.779.141 1.232.614 1.232 1.284L20 13a4.995 4.995 0 0 0-4-1.997A5.001 5.001 0 0 0 11.099 15h-1.12a5.499 5.499 0 0 0-5.478-4.994 5.482 5.482 0 0 0-3.377 1.157H.004v-1.18L0 7.327c-.002-.597.37-1.18.999-1.302V1a1 1 0 0 1 1-1zm1 2H3v4h.75c1.386.027 2.749.073 4.079.139z"
        />
    </svg>
);
export default SvgTractorIcon;
