import type { SVGProps } from 'react'

const SvgFolderCloseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M0 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7H0zM19 4H9.41l-1.7-1.71A.997.997 0 0 0 7 2H1c-.55 0-1 .45-1 1v3h20V5c0-.55-.45-1-1-1'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgFolderCloseIcon
