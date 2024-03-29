import * as React from "react";
import type { SVGProps } from "react";

const SvgLearningIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <g fillRule="evenodd">
            <path d="M10.551 1.127a1.256 1.256 0 0 0-1.102 0L.456 5.89c-.608.309-.608.913 0 1.222l8.993 4.762c.334.17.767.17 1.102 0l8.992-4.762c.61-.309.61-.913 0-1.222z" />
            <path d="m18 6.5.016 4.514c.002.548.447.99.994.99a.99.99 0 0 0 .99-.99V6.5zM3.366 10.033l6.401 3.358a.5.5 0 0 0 .465 0l6.406-3.358a.25.25 0 0 1 .366.221v5.109a.25.25 0 0 1-.139.224l-6.64 3.302a.5.5 0 0 1-.446 0l-6.64-3.302A.25.25 0 0 1 3 15.363v-5.108a.25.25 0 0 1 .366-.222" />
        </g>
    </svg>
);
export default SvgLearningIcon;
