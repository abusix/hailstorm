import * as React from "react";
import type { SVGProps } from "react";

const SvgCompressedIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m19.89 6.56-2.99-6h-.01C16.72.23 16.39 0 16 0H4c-.39 0-.72.23-.89.56H3.1l-3 6h.01C.05 6.69 0 6.84 0 7v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7c0-.16-.05-.31-.11-.44M11 2h4.38l2 4H11zM4.62 2H9v4H2.62zM18 18H2V8h7v4.59L6.71 10.3A.965.965 0 0 0 6 10a1.003 1.003 0 0 0-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L11 12.59V8h7z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgCompressedIcon;
