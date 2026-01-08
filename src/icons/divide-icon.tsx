import type { SVGProps } from 'react'

const SvgDivideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M11.25 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M6 9c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm4 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgDivideIcon
