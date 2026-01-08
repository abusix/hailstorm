import type { SVGProps } from 'react'

const SvgWidgetIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M18 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M2 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m15-1h2V5h-2zM3 5H1v10h2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m3 3h10V1H5zm13 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M5 19h10v-2H5z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgWidgetIcon
