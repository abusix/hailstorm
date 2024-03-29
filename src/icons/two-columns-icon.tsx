import * as React from "react";
import type { SVGProps } from "react";

const SvgTwoColumnsIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1m14.71 9.29-3-3A1.003 1.003 0 0 0 15 7v6a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71M12 0H8c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgTwoColumnsIcon;
