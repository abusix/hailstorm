import type { SVGProps } from 'react'

const SvgArrowTopRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M17 2H7c-.55 0-1 .45-1 1s.45 1 1 1h7.59L2.29 16.29a1.003 1.003 0 0 0 1.42 1.42L16 5.41V13c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgArrowTopRightIcon
