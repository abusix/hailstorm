import * as React from "react";
import type { SVGProps } from "react";

const SvgPolygonFilterIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M18 7c-.27 0-.52.05-.75.15l-6.28-4.88c.01-.09.03-.18.03-.27 0-1.1-.9-2-2-2S7 .9 7 2c0 .06.01.12.02.19l-4.19 3C2.57 5.07 2.29 5 2 5 .9 5 0 5.9 0 7c0 .74.4 1.38 1 1.72v7.55c-.6.35-1 .99-1 1.73 0 1.1.9 2 2 2 .74 0 1.38-.4 1.72-1h7.55c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2 0-.37-.11-.72-.29-1.02L18.03 11A2 2 0 0 0 18 7m-5.03 9c-.72.01-1.35.41-1.69 1H3.72c-.17-.3-.42-.55-.72-.72V8.72c.6-.34 1-.98 1-1.72 0-.06-.01-.12-.02-.19l4.19-3c.26.12.54.19.83.19.27 0 .52-.05.75-.15l6.28 4.88c-.01.09-.03.18-.03.27 0 .37.11.72.29 1.02z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgPolygonFilterIcon;
