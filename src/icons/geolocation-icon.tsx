import type { SVGProps } from 'react'

const SvgGeolocationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='m0 8.33 9.17 2.5 2.5 9.17L20 0z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgGeolocationIcon
