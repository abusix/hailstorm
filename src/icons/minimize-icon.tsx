import * as React from "react";
import type { SVGProps } from "react";

const SvgMinimizeIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1M20 1a1.003 1.003 0 0 0-1.71-.71L13 5.59V3c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-2.59l5.29-5.29c.19-.18.3-.43.3-.71"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgMinimizeIcon;
