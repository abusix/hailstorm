import * as React from "react";
import type { SVGProps } from "react";

const SvgFullscreenIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.41 2H6c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1s1-.45 1-1V3.41L7.29 8.7c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71zM8 11c-.28 0-.53.11-.71.29L2 16.59V14c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1H3.41l5.29-5.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1M19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1m0 13c-.55 0-1 .45-1 1v2.59l-5.29-5.29A.965.965 0 0 0 12 11a1.003 1.003 0 0 0-.71 1.71l5.3 5.29H14c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFullscreenIcon;
