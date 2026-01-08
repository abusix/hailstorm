import { classNames } from '../../util/class-names'

const spinnerVariants = {
  small: 'h-4 w-4',
  medium: 'h-6 w-6',
  large: 'h-10 w-10',
}

interface SpinnerProps {
  size?: keyof typeof spinnerVariants
}

export const Spinner = ({ size = 'large' }: SpinnerProps) => {
  return (
    <svg
      className={classNames(`animate-spin`, spinnerVariants[size])}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM2 20C2 29.9411 10.0589 38 20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20Z'
        fill='var(--color-neutral-200)'
      />
      <path
        d='M40 20C40 17.3736 39.4827 14.7728 38.4776 12.3463C37.4725 9.91982 35.9993 7.71504 34.1421 5.85786C32.285 4.00069 30.0802 2.5275 27.6537 1.52241C25.2272 0.517315 22.6264 -1.14805e-07 20 0V2C22.3638 2 24.7044 2.46558 26.8883 3.37017C29.0722 4.27475 31.0565 5.60062 32.7279 7.27208C34.3994 8.94353 35.7252 10.9278 36.6298 13.1117C37.5344 15.2956 38 17.6362 38 20H40Z'
        fill='var(--color-neutral-700)'
      />
    </svg>
  )
}
