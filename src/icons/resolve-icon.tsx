import * as React from "react";
import type { SVGProps } from "react";

const SvgResolveIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M8.7 4.7C7.9 4.2 7 4 6 4c-3.3 0-6 2.7-6 6s2.7 6 6 6c1 0 1.9-.2 2.7-.7C7.3 14 6.5 12.1 6.5 10s.9-4 2.2-5.3M14 4c-1 0-1.9.2-2.7.7 1.4 1.4 2.2 3.2 2.2 5.3s-.9 4-2.2 5.3c.8.5 1.7.7 2.7.7 3.3 0 6-2.7 6-6s-2.7-6-6-6m-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4" />
    </svg>
);
export default SvgResolveIcon;
