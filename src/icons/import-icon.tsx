import * as React from "react";
import type { SVGProps } from "react";

const SvgImportIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.29 15.71c.18.18.43.29.71.29s.53-.11.71-.29l5-5a1.003 1.003 0 0 0-1.42-1.42L11 12.59V1c0-.55-.45-1-1-1S9 .45 9 1v11.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42zM19 14c-.55 0-1 .45-1 1v3H2v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgImportIcon;
