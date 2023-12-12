import * as React from "react";
import type { SVGProps } from "react";

const SvgCubeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="m1.953 4.481 7.41-4.02a1.34 1.34 0 0 1 1.275 0l7.409 4.02L10 9.22zm-.817.68L9.5 10.085v9.281a1.316 1.316 0 0 1-.138-.064l-7.714-4.186A1.211 1.211 0 0 1 1 14.057v-8.35c0-.193.048-.38.136-.547m17.728 0c.088.166.136.353.136.546v8.35c0 .438-.247.842-.648 1.06l-7.714 4.186a1.229 1.229 0 0 1-.138.064v-9.281z" />
    </svg>
);
export default SvgCubeIcon;
