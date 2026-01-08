import type { SVGProps } from 'react'

const SvgOfficeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M19 6h-5V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h4v-6h4v6h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1M6 12H2V8h4zm0-6H2V2h4zm6 6H8V8h4zm0-6H8V2h4zm6 11h-4v-3h4zm0-5h-4V8h4z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgOfficeIcon
