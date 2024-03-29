import * as React from "react";
import type { SVGProps } from "react";

const SvgModalIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M19 1a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-1 4H2v12h16zm-3-3h-2v2h2zm3 0h-2v2h2z" />
    </svg>
);
export default SvgModalIcon;
