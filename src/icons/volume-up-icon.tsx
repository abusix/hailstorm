import * as React from "react";
import type { SVGProps } from "react";

const SvgVolumeUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9 3.43c-.28 0-.53.11-.71.29l-2.7 2.71H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71a1.003 1.003 0 0 0 1.71-.71v-12c-.01-.55-.46-1-1.01-1m8.31-1.56-1.62 1.2C17.14 5.16 18 7.69 18 10.43s-.86 5.27-2.31 7.37l1.62 1.2C19 16.57 20 13.62 20 10.43c0-3.18-1-6.13-2.69-8.56m-3.39 2.49-1.6 1.18A7.948 7.948 0 0 1 14 10.43c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.94 9.94 0 0 0 16 10.43c0-2.28-.78-4.38-2.08-6.07"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgVolumeUpIcon;
