import * as React from "react";
import type { SVGProps } from "react";

const SvgNewDrawingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M18.7 13.7c.5 0 1 .4 1 1 0 .257-.073.44-.22.614l-.08.086-4 4c-.2.2-.4.3-.7.3-.6 0-1-.5-1-1 0-.257.073-.44.22-.614L14 18l4-4c.2-.2.4-.3.7-.3M1.8 0l8.378 2.982A3.003 3.003 0 0 0 13 7a3.003 3.003 0 0 0 3.877 2.87l.723 2.53.049.06a.41.41 0 0 1 .051.24c0 .167-.07.403-.208.593l-.092.107-4 4c-.2.2-.4.3-.7.3-.075 0-.15-.056-.225-.084L12.4 17.6l-7-2-.112-.042c-.223-.094-.431-.244-.542-.45L4.7 15 0 1.8l.5-.6L7 7.7c-.2.3-.3.6-.3 1 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2a1.68 1.68 0 0 0-.871.22L7.7 7 1.2.5zM16 0c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .432-.278.803-.664.941l-.01.004A.989.989 0 0 1 16 8c-.55 0-1-.45-1-1V5h-2c-.55 0-1-.45-1-1l.007-.116C12.065 3.388 12.489 3 13 3h2V1c0-.55.45-1 1-1" />
    </svg>
);
export default SvgNewDrawingIcon;
