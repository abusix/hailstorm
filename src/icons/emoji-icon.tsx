import * as React from "react";
import type { SVGProps } from "react";

const SvgEmojiIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-4 8 .015.215C6.219 12.42 7.925 14 10 14a4 4 0 0 0 3.995-3.8L14 10h2l-.013.238C15.754 13.552 13.163 16 10 16a6 6 0 0 1-5.996-5.775L4 10zm1.5-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
    </svg>
);
export default SvgEmojiIcon;
