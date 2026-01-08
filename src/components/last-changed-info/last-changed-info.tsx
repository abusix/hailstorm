import { classNames } from '../../util/class-names'
import { getAbusixDateString } from '../../util/date'

interface LastChangedInfoProps {
  changedDate: Date
  changedBy: string | null
  className?: string
}

export const LastChangedInfo = ({
  changedDate,
  changedBy,
  className,
}: LastChangedInfoProps) => {
  const date = getAbusixDateString(changedDate)
  const changedByAppendix = changedBy ? `by ${changedBy}` : ''
  const lastChangeText = `Last changed on ${date} ${changedByAppendix}`

  return (
    <p className={classNames('paragraph-100 mt-5 text-neutral-700', className)}>
      {lastChangeText}
    </p>
  )
}
