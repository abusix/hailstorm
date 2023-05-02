import * as React from "react";
import { SVGProps } from "react";
const SvgHighlightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.22 14.09 3.03-3.03.71.71L20 6.73l-5.71-5.71-5.04 5.04.71.71-3.02 3.04 4.28 4.28zm6.8 3.91h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm-15-1h4.04c.28 0 .53-.11.71-.3l2.02-2.02-3.44-3.45-4.04 4.04c-.18.18-.3.44-.3.71.01.57.46 1.02 1.01 1.02z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHighlightIcon;
