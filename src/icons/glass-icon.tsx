import * as React from "react";
import { SVGProps } from "react";
const SvgGlassIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 6V0H3v6c0 3.53 2.61 6.43 6 6.92V18H6c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-5.08c3.39-.49 6-3.39 6-6.92z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGlassIcon;
