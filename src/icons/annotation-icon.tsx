import * as React from "react";
import type { SVGProps } from "react";

const SvgAnnotationIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m9.41 13.41 7.65-7.65-2.83-2.83-7.65 7.65zm10-10c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83zM18 18H2V2h8.93l2-2H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7.07l-2 2zM4 16l4.41-1.59-2.81-2.79z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgAnnotationIcon;
