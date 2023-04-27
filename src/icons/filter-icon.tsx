import * as React from "react";
import { SVGProps } from "react";
const SvgFilterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 1H2a1.003 1.003 0 0 0-.71 1.71L7 8.41V18a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71V8.41l5.71-5.71c.18-.17.29-.42.29-.7 0-.55-.45-1-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilterIcon;
