import * as React from "react";
import type { SVGProps } from "react";

const SvgFloatingPointIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M1 6.648c.343 0 .676-.028 1-.085.324-.057.614-.152.871-.284.267-.133.49-.303.672-.512.19-.208.314-.464.371-.767h1.329v9.947H3.457v-7.02H1zm13.965-1.635c.688 0 1.247.16 1.677.478.44.31.78.711 1.018 1.204a5.02 5.02 0 0 1 .495 1.6c.092.583.137 1.149.137 1.696 0 .547-.045 1.112-.137 1.696a5.182 5.182 0 0 1-.495 1.614 3.234 3.234 0 0 1-1.018 1.203c-.43.31-.99.465-1.677.465s-1.251-.155-1.691-.465a3.416 3.416 0 0 1-1.018-1.203 5.714 5.714 0 0 1-.495-1.614 12.116 12.116 0 0 1-.123-1.696c0-.547.04-1.113.123-1.696a5.534 5.534 0 0 1 .495-1.6 3.26 3.26 0 0 1 1.018-1.204c.44-.319 1.004-.478 1.691-.478m0 8.657c.34 0 .623-.096.853-.287.229-.2.407-.465.536-.794a4.61 4.61 0 0 0 .288-1.176c.056-.447.083-.92.083-1.422 0-.502-.027-.971-.083-1.409a4.61 4.61 0 0 0-.288-1.176c-.129-.337-.307-.602-.536-.793-.23-.2-.514-.301-.853-.301-.348 0-.637.1-.866.3-.22.192-.399.457-.537.794-.128.337-.22.73-.274 1.176a11.13 11.13 0 0 0-.083 1.409c0 .501.027.975.082 1.422.055.447.147.84.275 1.176.138.329.317.593.537.794.229.191.518.287.866.287m-5.104-.588H7.875V15h1.986z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFloatingPointIcon;
