import * as React from "react";
import type { SVGProps } from "react";

const SvgChevronBackwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m8.41 10 5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L7 8.59V4c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1v-4.59l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgChevronBackwardIcon;
