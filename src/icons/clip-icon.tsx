import * as React from "react";
import { SVGProps } from "react";

const SvgClipIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H2v4a1 1 0 0 1-2 0V1Zm1 19a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2H1Zm18 0a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2h5Zm0-20a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V2h-4a1 1 0 1 1 0-2h5Zm-9 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgClipIcon;
