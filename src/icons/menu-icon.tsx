import type { SVGProps } from 'react'

const SvgMenuIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M1 6h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1m18 3H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1m0 5H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgMenuIcon
