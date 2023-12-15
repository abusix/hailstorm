import * as React from "react";
import type { SVGProps } from "react";

const SvgSettingsBigIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fillRule="evenodd"
                d="M18.988 8h-2.31a6.695 6.695 0 0 0-.563-1.3L17.814 5a1.004 1.004 0 0 0 0-1.412l-1.412-1.413a1.002 1.002 0 0 0-1.411 0l-1.7 1.7a7.511 7.511 0 0 0-1.299-.55V1c0-.55-.45-1-.999-1H8.994c-.55 0-.999.45-.999 1v2.325c-.487.15-.937.35-1.374.587L4.997 2.289a.965.965 0 0 0-1.362 0L2.286 3.65a.966.966 0 0 0 0 1.363L3.91 6.638c-.25.425-.45.875-.6 1.362H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2.31c.138.463.338.887.563 1.3l-1.7 1.7a1.004 1.004 0 0 0 0 1.413l1.412 1.412a1.002 1.002 0 0 0 1.412 0l1.699-1.7a6.65 6.65 0 0 0 1.299.55V19c0 .55.45 1 1 1h1.998c.55 0 1-.45 1-1v-2.325a7.45 7.45 0 0 0 1.374-.588l1.624 1.625a.965.965 0 0 0 1.361 0l1.362-1.362a.966.966 0 0 0 0-1.363l-1.624-1.624a7.57 7.57 0 0 0 .6-1.375H19c.55 0 1-.45 1-1v-2A1.02 1.02 0 0 0 18.988 8m-8.994 5.75A3.744 3.744 0 0 1 6.246 10a3.744 3.744 0 0 1 3.748-3.75A3.744 3.744 0 0 1 13.742 10a3.744 3.744 0 0 1-3.748 3.75"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h20v20H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgSettingsBigIcon;
