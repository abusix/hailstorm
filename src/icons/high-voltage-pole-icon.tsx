import * as React from 'react';
import { SVGProps } from 'react';

const SvgHighVoltagePoleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" {...props}>
        <path
            fillRule="evenodd"
            d="M7 0a1 1 0 0 0-1 1v3H4V2a1 1 0 0 0 0-2H1a1 1 0 1 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2V6h2v13a1 1 0 0 0 1.928.374L10 14.54l2.073 4.836A1 1 0 0 0 14 19V6h2v2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-1V6h1a1 1 0 1 0 0-2h-1V2h1a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2v2h-2V1a1 1 0 0 0-1-1H7Zm1 2v2h4V2H8Zm4 12.128L11.088 12 12 9.872v4.256ZM8.516 6 10 9.462 11.483 6H8.516Zm.396 6L8 9.872v4.256L8.912 12Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgHighVoltagePoleIcon;
