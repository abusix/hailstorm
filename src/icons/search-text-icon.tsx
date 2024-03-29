import * as React from "react";
import type { SVGProps } from "react";

const SvgSearchTextIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="m19.56 17.44-3.23-3.23A8.939 8.939 0 0 0 18 9a9 9 0 1 0-9 9c1.94 0 3.74-.62 5.21-1.67l3.23 3.23a1.498 1.498 0 1 0 2.12-2.12M9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7m3.5-11h-7c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5V7h2v6h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7h2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-2c0-.28-.22-.5-.5-.5"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgSearchTextIcon;
