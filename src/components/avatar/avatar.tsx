const avatarVariants = {
  primary: 'bg-primary-200 text-primary-500 ',
  success: 'bg-success-200 text-success-600',
  neutral: 'bg-neutral-200 text-neutral-800',
  warning: 'bg-warning-100 text-warning-700',
  danger: 'bg-danger-100 text-danger-600',
}

export interface AvatarProps {
  children: string
  onClick?: () => void
  color: keyof typeof avatarVariants
}

export const Avatar = ({
  color = 'primary',
  children,
  onClick,
}: AvatarProps) => {
  const label = children.substring(0, 2)
  return (
    <div
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-xs ${avatarVariants[color]}`}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      role='button'
    >
      <span className='uppercase'>{label}</span>
    </div>
  )
}
