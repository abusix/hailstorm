import type { SVGProps } from 'react'

const SvgStarEmptyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='m20 7.6-6.9-1.1L10 0 6.9 6.6 0 7.6l5 5.1L3.8 20l6.2-3.4 6.2 3.4-1.2-7.2zM10 15l-4.5 2.4.9-5.2-3.6-3.6 5-.8L10 3.1l2.2 4.7 5 .8-3.6 3.7.9 5.2z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgStarEmptyIcon
