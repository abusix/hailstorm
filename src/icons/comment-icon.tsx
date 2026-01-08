import type { SVGProps } from 'react'

const SvgCommentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M19 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3v4a1.003 1.003 0 0 0 1.71.71l4.7-4.71H19c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1M4 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgCommentIcon
