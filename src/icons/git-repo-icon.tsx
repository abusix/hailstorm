import * as React from "react";
import type { SVGProps } from "react";

const SvgGitRepoIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7 3H5v2h2zm0 6H5v2h2zm0-3H5v2h2zm12-6H1C.45 0 0 .45 0 1v16c0 .55.45 1 1 1h4v2l2-1 2 1v-2h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1m-1 16H9v-1H5v1H2v-2h16zm0-3H4V2h14z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgGitRepoIcon;
