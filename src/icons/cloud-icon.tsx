import type { SVGProps } from 'react'

const SvgCloudIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M15 7c-.12 0-.24.03-.36.04C13.83 4.69 11.62 3 9 3 5.69 3 3 5.69 3 9c0 .05.01.09.01.14A3.98 3.98 0 0 0 0 13c0 2.21 1.79 4 4 4h11c2.76 0 5-2.24 5-5s-2.24-5-5-5'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgCloudIcon
