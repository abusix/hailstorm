import { Badge, BadgeType } from '../../badge/badge'

export interface ListboxButtonBadgeValueProps {
  placeholder: string
  value?: string | number | null
  badgeType?: BadgeType
}

export const ListboxButtonBadgeValue = ({
  placeholder,
  value,
  badgeType = 'neutral',
}: ListboxButtonBadgeValueProps) => {
  if (!value) {
    return <div className='paragraph-100 text-neutral-600'>{placeholder}</div>
  }
  return <Badge type={badgeType}>{value}</Badge>
}
