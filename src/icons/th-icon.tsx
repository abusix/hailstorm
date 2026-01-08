import type { SVGProps } from 'react'

const SvgThIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path d='M19 1H1c-.6 0-1 .5-1 1v16c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1M7 17H2v-3h5zm0-4H2v-3h5zm0-4H2V6h5zm11 8H8v-3h10zm0-4H8v-3h10zm0-4H8V6h10z' />
  </svg>
)
export default SvgThIcon
