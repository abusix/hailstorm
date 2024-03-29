import * as React from "react";
import type { SVGProps } from "react";

const SvgNewLayersIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <defs>
            <path
                id="a"
                d="M17 3h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V5h-2a1 1 0 0 1 0-2h2V1a1 1 0 0 1 2 0zm-1.252 5.984L10.5 11.9c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5C.2 6.7 0 6.4 0 6s.2-.7.5-.9l9-5c.2-.1.3-.1.5-.1s.3 0 .5.1L13.92 2H13a2 2 0 1 0 0 4h1v1a2 2 0 0 0 1.748 1.984m2.07-1.15C17.935 7.58 18 7.298 18 7V6h1c.353 0 .684-.091.972-.251.018.078.028.162.028.251 0 .4-.2.7-.5.9zM19 9c.6 0 1 .4 1 1 0 .4-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5c-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .2 0 .3 0 .5.1l8.5 4.8 8.5-4.8c.2-.1.3-.1.5-.1m0 4c.6 0 1 .4 1 1 0 .4-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5c-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .2 0 .3 0 .5.2l8.5 4.7 8.5-4.8c.2-.1.3-.1.5-.1"
            />
        </defs>
        <use xlinkHref="#a" fillRule="evenodd" />
    </svg>
);
export default SvgNewLayersIcon;
