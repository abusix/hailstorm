import * as React from "react";
import type { SVGProps } from "react";

const SvgTickIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M17 4c-.28 0-.53.11-.71.29L7 13.59 3.71 10.3A.965.965 0 0 0 3 10a1.003 1.003 0 0 0-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l10-10A1.003 1.003 0 0 0 17 4"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgTickIcon;
