import * as React from "react";
import type { SVGProps } from "react";

const SvgArrayBooleanIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M19 0a1 1 0 0 1 .993.883L20 1v18a1 1 0 0 1-.883.993L19 20h-4a1 1 0 0 1-.117-1.993L15 18h3V2h-3a1 1 0 0 1-.993-.883L14 1a1 1 0 0 1 .883-.993L15 0zM5 0a1 1 0 0 1 .117 1.993L5 2H2v16h3a1 1 0 0 1 .993.883L6 19a1 1 0 0 1-.883.993L5 20H1a1 1 0 0 1-.993-.883L0 19V1A1 1 0 0 1 .883.007L1 0zm10 7a1 1 0 0 1 .993.883L16 8v4a1 1 0 0 1-.883.993L15 13H5a1 1 0 0 1-.993-.883L4 12V8a1 1 0 0 1 .883-.993L5 7zm0 1h-5v4h5z"
        />
    </svg>
);
export default SvgArrayBooleanIcon;
