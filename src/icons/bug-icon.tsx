import type { SVGProps } from 'react'

const SvgBugIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M6.006 4.272C6.124 2.136 7.866 0 10 0c2.133 0 3.877 2.136 3.994 4.272.49.438.909.956 1.234 1.532L17 5.017V3a1 1 0 1 1 2 0v2.667a1 1 0 0 1-.594.913l-2.5 1.111c.062.344.094.698.094 1.059V10h3a1 1 0 1 1 0 2h-3v.5c0 .604-.09 1.187-.255 1.737l2.661 1.182a1 1 0 0 1 .594.914V19a1 1 0 1 1-2 0v-2.017l-2.147-.954A5.992 5.992 0 0 1 10 18.5a5.992 5.992 0 0 1-4.853-2.471L3 16.983V19a1 1 0 1 1-2 0v-2.667a1 1 0 0 1 .594-.913l2.661-1.183A6 6 0 0 1 4 12.5V12H1a1 1 0 1 1 0-2h3V8.75c0-.361.032-.715.093-1.059l-2.5-1.11A1 1 0 0 1 1 5.666V3a1 1 0 0 1 2 0v2.017l1.772.787a6.026 6.026 0 0 1 1.234-1.532M6 11v1.5a4 4 0 0 0 8 0V8.75a4 4 0 0 0-8 0z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgBugIcon
