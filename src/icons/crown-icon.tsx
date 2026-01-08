import type { SVGProps } from 'react'

const SvgCrownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='m2 8 4 2 4-5 4 5 4-2-1 7H3zm8-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2M1 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m18 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M3 16h14v2H3z'
    />
  </svg>
)
export default SvgCrownIcon
