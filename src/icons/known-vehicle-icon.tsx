import * as React from "react";
import type { SVGProps } from "react";

const SvgKnownVehicleIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M19 4a.997.997 0 0 0-.707.293L14 8.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 0 0 19 4m-2.048 7.291c.011.072.048.134.048.209a1.5 1.5 0 0 1-1.5 1.5c-.225 0-.433-.057-.624-.145-.279.085-.57.145-.876.145a2.99 2.99 0 0 1-2.121-.879l-3-3 .007-.007A3.027 3.027 0 0 1 8.184 8H4V7l1-3h10l.19.568 1.307-1.308c-.336-.356-.758-.658-1.165-.772 0 0-1.74-.488-5.332-.488s-5.332.488-5.332.488c-.67.188-1.424.864-1.674 1.502L2.99 4H3L2 7H1a1 1 0 0 0 0 2h.333l-.28.84L1 10v7.5a1.5 1.5 0 1 0 3 0V17h12v.5a1.5 1.5 0 0 0 3 0V10l-.19-.568zM4.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgKnownVehicleIcon;
