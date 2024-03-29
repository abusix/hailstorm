import * as React from "react";
import type { SVGProps } from "react";

const SvgDrawerRightIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M19 0a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-1 2h-6v16h6zm-8 7H3.41L5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L3.41 11H10z" />
    </svg>
);
export default SvgDrawerRightIcon;
