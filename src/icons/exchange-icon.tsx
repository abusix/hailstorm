import * as React from "react";
import type { SVGProps } from "react";

const SvgExchangeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M2.5 8a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5m10.35 3.15a.495.495 0 1 0-.7.7L13.3 13H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h7.79l-1.15 1.15c-.08.09-.14.21-.14.35a.495.495 0 0 0 .85.35l2-2c.09-.09.15-.21.15-.35s-.06-.26-.15-.35zM17.5 8a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5M7.15 9.85a.495.495 0 1 0 .7-.7L6.71 8h7.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H6.71l1.15-1.15c.08-.09.14-.21.14-.35a.495.495 0 0 0-.85-.35l-2 2c-.09.09-.15.21-.15.35s.06.26.15.35z" />
    </svg>
);
export default SvgExchangeIcon;
