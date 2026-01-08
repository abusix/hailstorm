import type { SVGProps } from 'react'

const SvgFilmIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M19 2h-5v3H6V2H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h5v-3h8v3h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1M4 17H2v-2h2zm0-3H2v-2h2zm0-3H2V9h2zm0-3H2V6h2zm0-3H2V3h2zm10 8H6V7h8zm4 4h-2v-2h2zm0-3h-2v-2h2zm0-3h-2V9h2zm0-3h-2V6h2zm0-3h-2V3h2z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgFilmIcon
