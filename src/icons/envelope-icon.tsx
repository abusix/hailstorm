import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopeIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M0 4.01v11.91l6.27-6.27L0 4.01zm18.91-1.03H1.09L10 10.97l8.91-7.99zm-5.18 6.66L20 15.92V4.01l-6.27 5.63zm-3.23 2.9c-.13.12-.31.19-.5.19s-.37-.07-.5-.19l-2.11-1.89-6.33 6.33h17.88l-6.33-6.33-2.11 1.89z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgEnvelopeIcon;
