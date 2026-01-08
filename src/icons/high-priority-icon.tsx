import type { SVGProps } from 'react'

const SvgHighPriorityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path fillRule='evenodd' d='M12 16v4H8v-4zm1-16-1 14H8L7 0z' />
  </svg>
)
export default SvgHighPriorityIcon
