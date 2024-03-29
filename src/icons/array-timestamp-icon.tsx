import * as React from "react";
import type { SVGProps } from "react";

const SvgArrayTimestampIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M19 0a1 1 0 0 1 .993.883L20 1v18a1 1 0 0 1-.883.993L19 20h-4a1 1 0 0 1-.117-1.993L15 18h3V2h-3a1 1 0 0 1-.993-.883L14 1a1 1 0 0 1 .883-.993L15 0zM5 0a1 1 0 0 1 .117 1.993L5 2H2v16h3a1 1 0 0 1 .993.883L6 19a1 1 0 0 1-.883.993L5 20H1a1 1 0 0 1-.993-.883L0 19V1A1 1 0 0 1 .883.007L1 0zm5 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 1a5 5 0 1 0 0 10 5 5 0 0 0 0-10m2.854 2.146a.5.5 0 0 1 .057.638l-.057.07-2.5 2.5a.5.5 0 0 1-.638.057l-.07-.057-1.5-1.5a.5.5 0 0 1 .638-.765l.07.057L10 9.293l2.146-2.147a.5.5 0 0 1 .708 0"
        />
    </svg>
);
export default SvgArrayTimestampIcon;
