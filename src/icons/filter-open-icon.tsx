import * as React from "react";
import type { SVGProps } from "react";

const SvgFilterOpenIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M15 2c0 .28-.11.53-.29.7L10 7.41V13c0 .28-.11.53-.29.71l-3 3A1.003 1.003 0 0 1 5 16V7.41L.29 2.71A1.003 1.003 0 0 1 1 1h13c.55 0 1 .45 1 1m4.707 11.293a1 1 0 0 1 0 1.414l-4 4c-.63.63-1.707.184-1.707-.707v-8c0-.89 1.077-1.337 1.707-.707z"
        />
    </svg>
);
export default SvgFilterOpenIcon;
