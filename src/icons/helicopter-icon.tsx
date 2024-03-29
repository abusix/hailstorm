import * as React from "react";
import type { SVGProps } from "react";

const SvgHelicopterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M10 3v2H1V3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V7l5 2c0 1.54.824 3.575 3 4.835V16H5.5a.5.5 0 1 0 0 1h11a.5.5 0 0 0 .224-.053l2-1a.5.5 0 1 0-.448-.894L16.382 16H15v-1.1A5.002 5.002 0 0 0 14 5h-1V3h6.5a.5.5 0 0 0 0-1h-16a.5.5 0 0 0 0 1zm4 13v-1c-1.608 0-2.928-.258-4-.683V16zm0-6V6a4 4 0 0 1 4 4z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgHelicopterIcon;
