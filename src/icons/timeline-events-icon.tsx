import * as React from "react";
import type { SVGProps } from "react";

const SvgTimelineEventsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path d="M5 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1m10 0c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1m-9 9H4v2h2zM17 3v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H7v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H2c-.5 0-1 .5-1 1v14c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1zM7 17H3v-4h4zm0-5H3V8h4zm5 5H8v-4h4zm0-5H8V8h4zm5 5h-4v-4h4zm0-5h-4V8h4zm-6 2H9v2h2zm5-5h-2v2h2z" />
    </svg>
);
export default SvgTimelineEventsIcon;
