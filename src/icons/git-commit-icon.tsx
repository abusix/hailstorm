import * as React from "react";
import type { SVGProps } from "react";

const SvgGitCommitIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M19 9h-4.1a5 5 0 0 0-9.8 0H1c-.55 0-1 .45-1 1s.45 1 1 1h4.1a5 5 0 0 0 9.8 0H19c.55 0 1-.45 1-1s-.45-1-1-1m-9 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgGitCommitIcon;
