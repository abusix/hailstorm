import type { SVGProps } from 'react'

const SvgDocumentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M11.98 0h-8c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V6zm4 18h-11V2h6v5h5z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgDocumentIcon
