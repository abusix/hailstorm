import type { SVGProps } from 'react'

const SvgControlIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M17 10h-7v7h7zm0-7h-7v6h7zM9 3H3v14h6zm10-3H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1m-1 18H2V2h16z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgControlIcon
