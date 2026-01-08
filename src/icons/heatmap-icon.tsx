import type { SVGProps } from 'react'

const SvgHeatmapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <circle cx={6} cy={6} r={6} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={10.5} cy={12.5} r={4.5} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={16.5} cy={10.5} r={3.5} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={18} cy={18} r={2} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={2.5} cy={16.5} r={2.5} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={16.5} cy={2.5} r={2.5} fillRule='evenodd' clipRule='evenodd' />
  </svg>
)
export default SvgHeatmapIcon
