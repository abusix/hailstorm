import * as React from "react";
import type { SVGProps } from "react";

const SvgUnlockIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M14 1c-2.21 0-4 1.79-4 4v4H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-2V5c0-1.1.9-2 2-2s2 .9 2 2v2c0 .55.45 1 1 1s1-.45 1-1V5c0-2.21-1.79-4-4-4" />
    </svg>
);
export default SvgUnlockIcon;
