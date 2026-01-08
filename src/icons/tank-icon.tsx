import type { SVGProps } from 'react'

const SvgTankIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M3.956 4.47A1 1 0 0 1 4.804 4h6.392a1 1 0 0 1 .848.47L13 6h5a1 1 0 0 1 0 2h-5v1h4a3 3 0 1 1 0 6H3a3 3 0 0 1 0-6V6.287a1 1 0 0 1 .152-.53zM3 11h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgTankIcon
