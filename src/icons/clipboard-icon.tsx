import * as React from "react";
import type { SVGProps } from "react";

const SvgClipboardIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M13 2c0-.55-.45-1-1-1h-.78a1.98 1.98 0 0 0-3.44 0H7c-.55 0-1 .45-1 1v2h7z" />
        <path d="M16 2h-2v3H5V2H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1" />
    </svg>
);
export default SvgClipboardIcon;
