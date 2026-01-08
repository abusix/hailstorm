import type { SVGProps } from 'react'

const SvgGridViewIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M0 19c0 .55.45 1 1 1h8v-9H0zM0 1v8h9V0H1C.45 0 0 .45 0 1m19-1h-8v9h9V1c0-.55-.45-1-1-1m-8 20h8c.55 0 1-.45 1-1v-8h-9z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgGridViewIcon
