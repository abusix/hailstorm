import type { SVGProps } from 'react'

const SvgCalculatorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M16 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1M7 18H5v-2h2zm0-4H5v-2h2zm0-4H5V8h2zm4 8H9v-2h2zm0-4H9v-2h2zm0-4H9V8h2zm4 8h-2v-6h2zm0-8h-2V8h2zm0-4H5V2h10z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgCalculatorIcon
