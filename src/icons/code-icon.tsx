import * as React from "react";
import type { SVGProps } from "react";

const SvgCodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6 6a1.003 1.003 0 0 0-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L2.41 10 5.7 6.71c.19-.18.3-.43.3-.71m6-4c-.46 0-.83.31-.95.73l-4 14c-.02.09-.05.17-.05.27 0 .55.45 1 1 1 .46 0 .83-.31.95-.73l4-14c.02-.09.05-.17.05-.27 0-.55-.45-1-1-1m7.71 7.29-4-4a1.003 1.003 0 0 0-1.42 1.42l3.3 3.29-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgCodeIcon;
