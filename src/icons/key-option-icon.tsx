import type { SVGProps } from 'react'

const SvgKeyOptionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M13 4h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1m6 12h-4.42L6.87 2.5l-.02.01A.977.977 0 0 0 6 2H1c-.55 0-1 .45-1 1s.45 1 1 1h4.42l7.71 13.5.01-.01c.18.3.49.51.86.51h5c.55 0 1-.45 1-1s-.45-1-1-1'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgKeyOptionIcon
