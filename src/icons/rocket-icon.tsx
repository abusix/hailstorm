import type { SVGProps } from 'react'

const SvgRocketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M7 7.5c0-3 1.857-6.25 3-7.5 1.143 1.25 3 4.5 3 7.5s-.714 6.25-1 7.5H8c-.286-1.25-1-4.5-1-7.5m6.84 2.5c-.139 1.62-.47 3.405-.84 5.01l4 .99-1-4zm-4.832 6C9 16.139 9 16.284 9 16.429 9 17.143 9 17.5 10 20c1-2.5 1-2.857 1-3.571 0-.145 0-.29-.008-.429zM7 15.011c-.37-1.605-.701-3.39-.84-5.011L4 12l-1 4zM10 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgRocketIcon
