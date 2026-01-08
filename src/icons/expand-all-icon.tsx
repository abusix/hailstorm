import type { SVGProps } from 'react'

const SvgExpandAllIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M4 9c.28 0 .53-.11.71-.29L10 3.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6C10.53 1.11 10.28 1 10 1s-.53.11-.71.29l-6 6A1.003 1.003 0 0 0 4 9m12 2c-.28 0-.53.11-.71.29L10 16.59 4.71 11.3A.965.965 0 0 0 4 11a1.003 1.003 0 0 0-.71 1.71l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0 0 16 11'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgExpandAllIcon
