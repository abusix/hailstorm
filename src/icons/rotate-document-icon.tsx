import * as React from "react";
import type { SVGProps } from "react";

const SvgRotateDocumentIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.71 6.29A.997.997 0 0 0 8 6H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-8c0-.28-.11-.53-.29-.71zM11 18H4V8h3v3c0 .55.45 1 1 1h3zm3-16h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgRotateDocumentIcon;
