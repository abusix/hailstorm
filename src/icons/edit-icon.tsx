import type { SVGProps } from 'react'

const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='m4.59 12.59 2.83 2.83 7.65-7.65-2.83-2.83zM2 18l4.41-1.59-2.81-2.79zM16 2c-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.65-1.65A2.006 2.006 0 0 0 16 2'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgEditIcon
