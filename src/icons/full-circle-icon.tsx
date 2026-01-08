import type { SVGProps } from 'react'

const SvgFullCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <circle cx={9.96} cy={10} r={10} />
  </svg>
)
export default SvgFullCircleIcon
