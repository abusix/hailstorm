import * as React from "react";
import type { SVGProps } from "react";

const SvgCycleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M16 10a4 4 0 1 1 0 8 4 4 0 0 1 0-8M4 10a4 4 0 1 1 0 8 4 4 0 0 1 0-8m7.299-5.543.087.089 1.93 2.232 2.048.708a1 1 0 0 1 .65 1.16l-.031.112a1 1 0 0 1-1.16.65l-.112-.031-2.302-.796a1 1 0 0 1-.337-.197l-.092-.094-1.387-1.603-1.891 1.982 2.046 2.274a1 1 0 0 1 .25.547l.007.122v4.24a1 1 0 0 1-1.993.117l-.007-.117-.001-3.857-2.408-2.676a1 1 0 0 1-.063-1.26l.082-.099 3.29-3.45a1 1 0 0 1 1.394-.053M16 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9.5-10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
    </svg>
);
export default SvgCycleIcon;
