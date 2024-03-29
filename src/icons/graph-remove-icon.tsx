import * as React from "react";
import type { SVGProps } from "react";

const SvgGraphRemoveIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m17.41 4 2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L16 2.59 13.71.3A.965.965 0 0 0 13 0a1.003 1.003 0 0 0-.71 1.71L14.59 4 12.3 6.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L16 5.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71zM19 10c-.83 0-1.55-.36-2.09-.91l-.03.03-.88-.88-.88.88a2.996 2.996 0 1 1-4.24-4.24l.88-.88-.88-.88.03-.03C10.36 2.55 10 1.83 10 1c0-.35.07-.68.18-.99-.06 0-.12-.01-.18-.01C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-.06-.01-.12-.01-.18-.31.11-.64.18-.99.18"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgGraphRemoveIcon;
