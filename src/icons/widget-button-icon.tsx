import type { SVGProps } from 'react'

const SvgWidgetButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path d='M1 4h18c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1m1 2v8h16V6zm4 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1' />
  </svg>
)
export default SvgWidgetButtonIcon
