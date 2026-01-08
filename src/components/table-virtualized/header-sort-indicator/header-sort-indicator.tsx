import { CaretDownIcon, CaretUpIcon } from '../../../icons'

export type SortDirection = 'asc' | 'desc'

export interface SortIndicatorProps {
  direction: SortDirection
}

export const SortIndicator = ({ direction }: SortIndicatorProps) => {
  const iconClassName = 'ml-1 w-3.5 fill-neutral-600'
  const Icon =
    direction === 'asc' ?
      <CaretUpIcon className={iconClassName} />
    : <CaretDownIcon className={iconClassName} />

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{Icon}</>
}
