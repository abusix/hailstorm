import * as React from "react";
import type { SVGProps } from "react";

const SvgDownloadIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0m4.71 11.71-4 4c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-4-4a1.003 1.003 0 0 1 1.42-1.42L9 12.59V5c0-.55.45-1 1-1s1 .45 1 1v7.59l2.29-2.29c.18-.19.43-.3.71-.3a1.003 1.003 0 0 1 .71 1.71"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgDownloadIcon;
