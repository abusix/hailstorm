import * as React from "react";
import { SVGProps } from "react";
const SvgLightningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9 11H6a1 1 0 0 1-1-1L5.91.9a1 1 0 0 1 .995-.9h6.256a.839.839 0 0 1 .779 1.15L11.2 8h2.978a.822.822 0 0 1 .748 1.162l-4.764 10.481A.608.608 0 0 1 9 19.392V11Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLightningIcon;
