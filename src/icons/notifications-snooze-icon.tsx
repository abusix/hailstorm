import * as React from "react";
import type { SVGProps } from "react";

const SvgNotificationsSnoozeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <defs>
            <path
                id="a"
                d="M10 18c0 1.1-.9 2-2 2s-2-.9-2-2ZM8 0c.476 0 .914.168 1.258.448C8.508.878 8.09 1.562 8 2.5c-.133 1.4.4 2.367 1.6 2.9C8.533 6.6 8 7.467 8 8v1.2a2.8 2.8 0 0 0 2.8 2.8H14v2c0 .51.388.935.884.993L15 15c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V8c0-2.61 1.67-4.81 4-5.63V2c0-1.1.9-2 2-2"
            />
        </defs>
        <g fillRule="evenodd" transform="translate(2)">
            <use xlinkHref="#a" />
            <path
                fillRule="nonzero"
                d="M16 9.25v-.395a.75.75 0 0 0-.75-.75h-2.812L15.833 3.9A.75.75 0 0 0 16 3.43v-.68a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v.184c0 .414.336.75.75.75h2.813L10.22 7.831a1 1 0 0 0-.221.627v.792c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75"
            />
        </g>
    </svg>
);
export default SvgNotificationsSnoozeIcon;
