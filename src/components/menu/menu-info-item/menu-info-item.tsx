export interface MenuInfoItemProps {
  title: string
  subtitle: string
}

export const MenuInfoItem = ({ title, subtitle }: MenuInfoItemProps) => {
  return (
    <div className='bg-neutral-0 px-4 py-3'>
      <div className='mb-1 truncate font-semibold' title={title}>
        {title}
      </div>
      <div className='truncate text-sm text-neutral-600' title={subtitle}>
        {subtitle}
      </div>
    </div>
  )
}
