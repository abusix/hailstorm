import type { SVGProps } from 'react'

const SvgBoldIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M14.3 9c.4-.8.7-1.6.7-2.5C15 4 13 2 10.5 2H5c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h6.5c2.5 0 4.5-2 4.5-4.5 0-1.4-.7-2.7-1.7-3.5M7 5h3.5c.8 0 1.5.7 1.5 1.5S11.3 8 10.5 8H7zm4.5 9H7v-3h4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgBoldIcon
