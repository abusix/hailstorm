import * as React from "react";
import type { SVGProps } from "react";

const SvgLogOutIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m19.71 9.29-5-5a1.003 1.003 0 0 0-1.42 1.42L16.59 9H6c-.55 0-1 .45-1 1s.45 1 1 1h10.59l-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l5-5c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71M9 18H2V2h7c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgLogOutIcon;
