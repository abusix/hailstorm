import * as React from "react";
import type { SVGProps } from "react";

const SvgBadgeIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M16.94 5.73c-.19-1.41.62-2.52 1.38-3.59L17.03.65C14.89 1.76 11.88 1.48 10 0 8.12 1.48 5.11 1.76 2.97.65L1.68 2.14c.76 1.07 1.57 2.18 1.38 3.59C2.68 8.59 0 10.94 1.4 14.08c.56 1.43 1.81 2.37 3.4 2.75 1.95.46 4.4.91 5.2 3.17.8-2.26 3.25-2.71 5.2-3.17 1.6-.38 2.84-1.32 3.4-2.75 1.4-3.14-1.28-5.49-1.66-8.35"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgBadgeIcon;
