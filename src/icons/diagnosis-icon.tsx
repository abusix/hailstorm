import * as React from "react";
import type { SVGProps } from "react";

const SvgDiagnosisIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M4 2a1 1 0 0 1 .117 1.993L4 4v5a2 2 0 0 0 1.85 1.995L6 11a2 2 0 0 0 1.995-1.85L8 9V4a1 1 0 0 1-.117-1.993L8 2h1a1 1 0 0 1 .993.883L10 3v6a4.002 4.002 0 0 1-3 3.874V13a3 3 0 0 0 3 3 4 4 0 0 0 3.995-3.8L14 12V8.792a2.5 2.5 0 1 1 2 0V12a6 6 0 0 1-6 6 5 5 0 0 1-4.995-4.783L5 13v-.126A4.002 4.002 0 0 1 2.005 9.2L2 9V3a1 1 0 0 1 .883-.993L3 2z" />
    </svg>
);
export default SvgDiagnosisIcon;
