import * as React from "react";
import { SVGProps } from "react";
const SvgMoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
    {...props}
  >
    <path d="M19 14.15A9.94 9.94 0 0 1 9.94 20C4.45 20 0 15.55 0 10.06 0 6.03 2.4 2.56 5.85 1a9.811 9.811 0 0 0-.88 4.09c0 5.49 4.45 9.94 9.94 9.94 1.46 0 2.84-.31 4.09-.88z" />
  </svg>
);
export default SvgMoonIcon;
