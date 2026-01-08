import type { SVGProps } from 'react'

const SvgSymbolSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M15 4.01H5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10c0-.56-.45-1-1-1'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgSymbolSquareIcon
