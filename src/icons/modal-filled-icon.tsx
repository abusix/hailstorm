import * as React from "react";
import type { SVGProps } from "react";

const SvgModalFilledIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M20 5v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm-3-4h2a1 1 0 0 1 1 1v1h-3zm-2 2H0V2a1 1 0 0 1 1-1h14z" />
    </svg>
);
export default SvgModalFilledIcon;
