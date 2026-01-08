import type { SVGProps } from 'react'

const SvgDiagramTreeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M19 10v5h-2v-4h-6v4H9v-4H3v4H1v-5a1 1 0 0 1 1-1h7V5h2v4h7a1 1 0 0 1 1 1M1 16h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m16 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m-8 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1M9 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1'
    />
  </svg>
)
export default SvgDiagramTreeIcon
