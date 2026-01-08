import type { SVGProps } from 'react'

const SvgRemoveColumnIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M19 0H5c-.55 0-1 .45-1 1v4h2V2h5v16H6v-3H4v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1m-1 18h-5V2h5zM6.29 13.71a1.003 1.003 0 0 0 1.42-1.42L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 0 0 .29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L4 11.41z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgRemoveColumnIcon
