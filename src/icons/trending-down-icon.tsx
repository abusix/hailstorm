import * as React from "react";
import type { SVGProps } from "react";

const SvgTrendingDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M19 10c-.55 0-1 .45-1 1v1.37l-6.25-7.03-.01.01A.971.971 0 0 0 11 5c-.23 0-.42.09-.59.21l-.01-.01-3.43 2.58-5.42-3.61-.01.01A.969.969 0 0 0 1 4c-.55 0-1 .45-1 1 0 .35.19.64.46.82l-.01.01 6 4 .01-.02c.15.11.33.19.54.19.23 0 .42-.09.59-.21l.01.01 3.26-2.45L16.77 14H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgTrendingDownIcon;
