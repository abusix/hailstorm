import type { SVGProps } from 'react'

const SvgStadiumGeometryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M15 7H5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6M5 5a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgStadiumGeometryIcon
