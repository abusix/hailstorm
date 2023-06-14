import * as React from "react";
import { SVGProps } from "react";

const SvgAppHeaderIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M19 0a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18ZM8 6a1 1 0 0 0-1.993-.117L6 6v8a1 1 0 0 0 1.993.117L8 14v-3h4v3a1 1 0 0 0 1.993.117L14 14V6a1 1 0 0 0-1.993-.117L12 6v3H8V6Z" />
    </svg>
);
export default SvgAppHeaderIcon;
