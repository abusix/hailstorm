import type { SVGProps } from 'react'

const SvgInfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M12 4V0H8v4zM6 20v-2h2V8H6V6h6v12h2v2z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgInfoIcon
