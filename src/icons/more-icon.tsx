import type { SVGProps } from 'react'

const SvgMoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <circle cx={3.5} cy={10.5} r={2.5} />
    <circle cx={17.5} cy={10.5} r={2.5} />
    <circle cx={10.5} cy={10.5} r={2.5} />
  </svg>
)
export default SvgMoreIcon
