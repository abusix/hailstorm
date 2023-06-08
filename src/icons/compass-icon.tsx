import * as React from 'react';
import { SVGProps } from 'react';

const SvgCompassIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15 10c0 .14-.03.28-.09.4l-3.99 8.98-.01.02a.991.991 0 0 1-1.82 0l-.01-.02-3.99-8.98c-.06-.12-.09-.26-.09-.4s.03-.28.09-.4L9.08.62 9.09.6a.991.991 0 0 1 1.82 0l.01.02 3.99 8.98c.06.12.09.26.09.4zm-5-6.54L7.09 10h5.81L10 3.46z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgCompassIcon;
