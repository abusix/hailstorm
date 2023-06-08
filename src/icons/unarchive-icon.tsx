import * as React from 'react';
import { SVGProps } from 'react';

const SvgUnarchiveIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" {...props}>
        <path
            fillRule="evenodd"
            d="M16.434 0a1 1 0 0 1 .857.486L20 5v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5L2.709.486A1 1 0 0 1 3.566 0h12.868ZM10 8c-.28 0-.53.11-.71.29l-3 3-.084.096A1.003 1.003 0 0 0 7.71 12.71L9 11.41v4.58l.007.116c.058.496.482.884.993.884.55 0 1-.45 1-1v-4.58l1.29 1.29.081.073A.995.995 0 0 0 13 13a1.003 1.003 0 0 0 .71-1.71l-3-3-.096-.084A1.002 1.002 0 0 0 10 8Zm6-6H4L2 5.002h16L16 2Z"
        />
    </svg>
);
export default SvgUnarchiveIcon;
