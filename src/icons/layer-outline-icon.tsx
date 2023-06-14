import * as React from "react";
import { SVGProps } from "react";

const SvgLayerOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="m9.514 4.126-9 5a1 1 0 0 0 0 1.748l9 5a1 1 0 0 0 .972 0l9-5a1 1 0 0 0 0-1.748l-9-5a1 1 0 0 0-.972 0ZM10 6.144l6.94 3.855L10 13.855 3.059 9.999 10 6.144Z"
        />
    </svg>
);
export default SvgLayerOutlineIcon;
