import * as React from "react";
import type { SVGProps } from "react";

const SvgAddToFolderIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M.01 10V6H20v10c0 .55-.45 1-1 1H9.995v-3.99C9.965 11.332 8.635 10 6.987 10H1.989zM19 3c.55 0 1 .45.99 1v1H0V2c0-.55.45-1 1-1h5.997c.28 0 .53.11.71.29L9.414 3zM6.987 12c.55 0 .999.45 1.009 1.01v5c0 .55-.45 1-1 1s-.999-.45-.999-1v-2.59l-4.288 4.29a1.003 1.003 0 0 1-1.42-1.42L4.579 14h-2.59c-.55 0-1-.45-1-1s.45-1 1-1z"
        />
    </svg>
);
export default SvgAddToFolderIcon;
