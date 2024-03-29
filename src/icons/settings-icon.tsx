import * as React from "react";
import type { SVGProps } from "react";

const SvgSettingsIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 1c0-.55-.45-1-1-1S2 .45 2 1v5h2zM2 19c0 .55.45 1 1 1s1-.45 1-1v-6H2zm9-18c0-.55-.45-1-1-1S9 .45 9 1v8h2zm7 0c0-.55-.45-1-1-1s-1 .45-1 1v3h2zM9 19c0 .55.45 1 1 1s1-.45 1-1v-3H9zm9-14h-2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-2 14c0 .55.45 1 1 1s1-.45 1-1v-8h-2zM4 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m7 3H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSettingsIcon;
