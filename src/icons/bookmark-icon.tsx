import type { SVGProps } from 'react'

const SvgBookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path d='M6 0c-.55 0-1 .45-1 1v18c0 .55.32.68.71.29L9.3 15.7a.996.996 0 0 1 1.41 0l3.59 3.59c.38.39.7.26.7-.29V1c0-.55-.45-1-1-1z' />
  </svg>
)
export default SvgBookmarkIcon
