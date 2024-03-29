import * as React from "react";
import type { SVGProps } from "react";

const SvgInheritanceIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M6 10c0 2.21 1.79 4 4 4h6.59l-2.29-2.29A.965.965 0 0 1 14 11a1.003 1.003 0 0 1 1.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 0 1-1.42-1.42l2.3-2.29H10c-3.31 0-6-2.69-6-6H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zM2 2v6h6V2z" />
    </svg>
);
export default SvgInheritanceIcon;
