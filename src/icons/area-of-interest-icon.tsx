import * as React from "react";
import type { SVGProps } from "react";

const SvgAreaOfInterestIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M5 4.664C5 2.09 7.241 0 10 0s4.99 2.091 5 4.664C15 7.245 10 14 10 14S5 7.245 5 4.664M8 5a2 2 0 1 0 4.001-.001A2 2 0 0 0 8 5M.504 12.132l4.302-2.458c.322.576.662 1.145.995 1.681l.025.04-3.294 1.881L6.468 18h7.064l3.936-4.724-3.293-1.882.024-.039c.333-.536.673-1.105.995-1.681l4.302 2.458a1 1 0 0 1 .272 1.508l-5 6A1 1 0 0 1 14 20H6a1 1 0 0 1-.768-.36l-5-6a1 1 0 0 1 .272-1.508"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgAreaOfInterestIcon;
