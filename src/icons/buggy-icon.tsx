import * as React from "react";
import type { SVGProps } from "react";

const SvgBuggyIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            d="M15.836 1.014a1 1 0 0 1 1.058.539l2.482 4.962.02-.004a.5.5 0 0 1 .604.49v4.5a.5.5 0 0 1-.5.5h-3.93a1.5 1.5 0 0 0-1.248.667l-1.406 2.11A.5.5 0 0 1 12.5 15H8a.5.5 0 0 1-.354-.146l-2.414-2.415A1.5 1.5 0 0 0 4.172 12H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 8h.823l1.749-4.37a1 1 0 0 1 .764-.615zm.289 3.472 1.231 2.462-2.758.591zM14.5 3.264l-1.56 3.12-.252-.638-.825-2.043zm-9.78 1.63 5.122-.854.988 2.445.899 2.27L10.232 11H7.707L4.854 8.147A.5.5 0 0 0 4.5 8H3.477zM3 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6m14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgBuggyIcon;
