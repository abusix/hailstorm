import type { SVGProps } from 'react'

const SvgCubeAddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'
    {...props}
  >
    <path d='M17 3h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V5h-2a1 1 0 0 1 0-2h2V1a1 1 0 0 1 2 0zm-3.969 4.435L10 9.22 1.953 4.48 9.363.46a1.34 1.34 0 0 1 1.275 0l1.33.721A3.001 3.001 0 0 0 13 7c0 .148.01.293.031.435m.319.972A3 3 0 0 0 19 7v7.057c0 .438-.247.842-.648 1.06l-7.714 4.186a1.229 1.229 0 0 1-.138.064v-9.281zM1.136 5.16 9.5 10.086v9.281a1.316 1.316 0 0 1-.138-.064l-7.714-4.186A1.211 1.211 0 0 1 1 14.057v-8.35c0-.193.048-.38.136-.547' />
  </svg>
)
export default SvgCubeAddIcon
