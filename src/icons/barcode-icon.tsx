import * as React from "react";
import { SVGProps } from "react";
const SvgBarcodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 16.98h2v-14H6v14zm3 0h1v-14H9v14zm-6 0h2v-14H3v14zm-3 0h2v-14H0v14zm16 0h2v-14h-2v14zm-4 0h1v-14h-1v14zm7-14v14h1v-14h-1zm-5 14h1v-14h-1v14z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBarcodeIcon;
