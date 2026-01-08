import type { SVGProps } from 'react'

const SvgDeltaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M10 0 0 20h20zM9 6l6 12H3z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgDeltaIcon
