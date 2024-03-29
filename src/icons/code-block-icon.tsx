import * as React from "react";
import type { SVGProps } from "react";

const SvgCodeBlockIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M19 5h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H9V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1M8.71 15.29a1.003 1.003 0 0 1-1.42 1.42l-4-4C3.11 12.53 3 12.28 3 12s.11-.53.29-.71l4-4a1.003 1.003 0 0 1 1.42 1.42L5.41 12zm8-2.58-4 4a1.003 1.003 0 0 1-1.42-1.42l3.3-3.29-3.29-3.29A.965.965 0 0 1 11 8a1.003 1.003 0 0 1 1.71-.71l4 4c.18.18.29.43.29.71s-.11.53-.29.71"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgCodeBlockIcon;
