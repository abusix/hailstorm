import * as React from "react";
import { SVGProps } from "react";
const SvgOneToOneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm3.83-1a3.001 3.001 0 1 0 0 2h8.34a3.001 3.001 0 1 0 0-2H5.83ZM17 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOneToOneIcon;
