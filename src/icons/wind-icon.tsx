import type { SVGProps } from 'react'

const SvgWindIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M12 6a3 3 0 1 1 3 3H4a1 1 0 0 0 0 2h11a5 5 0 1 0-5-5 1 1 0 1 0 2 0M1 12a1 1 0 1 0 0 2h10a2 2 0 1 1 0 4c-.934 0-1.803-.614-2.057-1.333a1 1 0 1 0-1.886.666C7.627 18.944 9.321 20 11 20a4 4 0 0 0 0-8z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgWindIcon
