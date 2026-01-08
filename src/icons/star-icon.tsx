import type { SVGProps } from 'react'

const SvgStarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='m10 0 3.1 6.6 6.9 1-5 5.1 1.2 7.3-6.2-3.4L3.8 20 5 12.7 0 7.6l6.9-1z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgStarIcon
