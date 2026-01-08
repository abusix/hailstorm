import type { SVGProps } from 'react'

const SvgBookIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M3 1v18c0 .55.45 1 1 1h2V0H4c-.55 0-1 .45-1 1m14-1h-2v8l-2-2-2 2V0H7v20h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgBookIcon
