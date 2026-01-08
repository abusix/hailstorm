import type { SVGProps } from 'react'

const SvgSmallTickIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M15 5c-.28 0-.53.11-.71.29L8 11.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7A1.003 1.003 0 0 0 15 5'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgSmallTickIcon
