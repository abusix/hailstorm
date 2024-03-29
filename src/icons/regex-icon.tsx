import * as React from "react";
import type { SVGProps } from "react";

const SvgRegexIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M0 17.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M14 0a1 1 0 0 0-1 1v3.768L9.737 2.884a1 1 0 1 0-1 1.732L12 6.5 8.737 8.384a1 1 0 0 0 1 1.732L13 8.232V12a1 1 0 1 0 2 0V8.232l3.263 1.884a1 1 0 0 0 1-1.732L16 6.5l3.263-1.884a1 1 0 1 0-1-1.732L15 4.768V1a1 1 0 0 0-1-1" />
    </svg>
);
export default SvgRegexIcon;
