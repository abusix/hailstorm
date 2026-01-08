import type { SVGProps } from 'react'

const SvgLayoutGroupByIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <circle cx={2} cy={4} r={2} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={18} cy={2} r={2} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={18} cy={10} r={2} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={18} cy={18} r={2} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={2} cy={16} r={2} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={2} cy={10} r={2} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={13} cy={14} r={2} fillRule='evenodd' clipRule='evenodd' />
    <circle cx={13} cy={6} r={2} fillRule='evenodd' clipRule='evenodd' />
  </svg>
)
export default SvgLayoutGroupByIcon
