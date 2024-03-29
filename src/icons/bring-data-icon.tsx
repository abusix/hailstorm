import * as React from "react";
import type { SVGProps } from "react";

const SvgBringDataIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M18 18a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zM9.995 3.005c.55 0 1 .45 1 .999v9.584l1.29-1.288a1.002 1.002 0 0 1 1.42 1.419l-3 2.996a1.015 1.015 0 0 1-1.42 0l-3-2.997a1.002 1.002 0 0 1 1.42-1.419l1.29 1.29V4.013c0-.55.45-1.009 1-1.009M16 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>
);
export default SvgBringDataIcon;
