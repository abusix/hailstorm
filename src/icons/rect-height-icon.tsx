import * as React from "react";
import type { SVGProps } from "react";

const SvgRectHeightIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M4 18V2h12v16zM2 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm4.293 11.705a.999.999 0 1 1 1.412-1.412L10 13.587l2.295-2.294a.999.999 0 0 1 1.412 1.412l-2.962 2.963a1 1 0 0 1-1.49 0zm0-3.998a.999.999 0 0 1 0-1.412l2.962-2.963A1.008 1.008 0 0 1 10 4a.996.996 0 0 1 .745.332l2.962 2.963a.999.999 0 0 1-1.412 1.412L10 6.413 7.705 8.707a.999.999 0 0 1-1.412 0"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgRectHeightIcon;
