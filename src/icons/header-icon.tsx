import type { SVGProps } from 'react'

const SvgHeaderIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M16 1c-.55 0-1 .45-1 1v7H5V2c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-7h10v7c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgHeaderIcon
