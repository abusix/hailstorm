import * as React from "react";
import { SVGProps } from "react";
const SvgResetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
    {...props}
  >
    <path d="M6 6c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1s1 .45 1 1v2.05C3.82 1.6 6.71 0 10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10c0-.55.45-1 1-1s1 .45 1 1c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C7.47 2 5.23 3.17 3.76 5H5c.55 0 1 .45 1 1Z" />
  </svg>
);
export default SvgResetIcon;
