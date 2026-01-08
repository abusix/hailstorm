import type { SVGProps } from 'react'

const SvgNewLayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <defs>
      <path
        id='a'
        d='M11.513 2.663A2 2 0 0 0 13 6h1v1a2 2 0 1 0 4 0v-.733l1.5.833c.3.2.5.5.5.9s-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5C.2 8.7 0 8.4 0 8s.2-.7.5-.9l9-5c.2-.1.3-.1.5-.1s.3 0 .5.1zM17 3h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V5h-2a1 1 0 0 1 0-2h2V1a1 1 0 0 1 2 0z'
      />
    </defs>
    <use xlinkHref='#a' fillRule='evenodd' transform='translate(0 3)' />
  </svg>
)
export default SvgNewLayerIcon
