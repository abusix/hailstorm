import * as React from "react";
import type { SVGProps } from "react";

const SvgRandomIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.47 5h2.12L15.3 6.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 0 0-1.42 1.42L16.59 3H14c-.31 0-.57.15-.76.37l-.01-.01-2.93 3.52 1.3 1.56zm2.24 7.29a1.003 1.003 0 0 0-1.42 1.42l1.3 1.29h-2.12L4.77 3.36l-.01.01A.998.998 0 0 0 4 3H1c-.55 0-1 .45-1 1s.45 1 1 1h2.53l9.7 11.64.01-.01c.19.22.45.37.76.37h2.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM3.53 15H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.31 0 .57-.15.76-.37l.01.01 2.93-3.52-1.3-1.56z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgRandomIcon;
