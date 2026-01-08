import type { SVGProps } from 'react'

const SvgRectWidthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M18 16H2V4h16zM1 18a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM7.295 6.293a.999.999 0 1 1 1.412 1.412L6.413 10l2.294 2.295a.999.999 0 1 1-1.412 1.412l-2.963-2.962A.992.992 0 0 1 4 10a.996.996 0 0 1 .332-.745zm3.998 0a.999.999 0 0 1 1.412 0l2.963 2.962.04.038A.996.996 0 0 1 16 10a.996.996 0 0 1-.332.745l-2.963 2.962a.999.999 0 0 1-1.412-1.412L13.587 10l-2.294-2.295a.999.999 0 0 1 0-1.412'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgRectWidthIcon
