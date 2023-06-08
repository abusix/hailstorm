import * as React from "react";
import { SVGProps } from "react";
const SvgEqualsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
    {...props}
  >
    <path d="M4 7h12a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2Zm0 4h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Z" />
  </svg>
);
export default SvgEqualsIcon;
