import type { SVGProps } from 'react'

const SvgSymbolCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <circle cx={10} cy={10.01} r={6} fillRule='evenodd' clipRule='evenodd' />
  </svg>
)
export default SvgSymbolCircleIcon
