import * as React from "react";
import type { SVGProps } from "react";

const SvgArrayDateIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M19 0a1 1 0 0 1 .993.883L20 1v18a1 1 0 0 1-.883.993L19 20h-4a1 1 0 0 1-.117-1.993L15 18h3V2h-3a1 1 0 0 1-.993-.883L14 1a1 1 0 0 1 .883-.993L15 0zM5 0a1 1 0 0 1 .117 1.993L5 2H2v16h3a1 1 0 0 1 .993.883L6 19a1 1 0 0 1-.883.993L5 20H1a1 1 0 0 1-.993-.883L0 19V1A1 1 0 0 1 .883.007L1 0zm2.5 5a.5.5 0 0 1 .5.5V6h4v-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V6h1a1 1 0 0 1 .993.883L16 7v7a1 1 0 0 1-.883.993L15 15H5a1 1 0 0 1-.993-.883L4 14V7a1 1 0 0 1 .883-.993L5 6h1v-.5a.5.5 0 0 1 .5-.5zM15 9H5v5h10z"
        />
    </svg>
);
export default SvgArrayDateIcon;
