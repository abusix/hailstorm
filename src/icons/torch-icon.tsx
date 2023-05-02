import * as React from "react";
import { SVGProps } from "react";
const SvgTorchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.97 19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2h-6v2zm-3-15 3 4v8h6V8l3-4h-12zm5 5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V9zm6-9h-10c-.55 0-1 .45-1 1v2h12V1c0-.55-.45-1-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTorchIcon;
