export interface MenuTitleProps {
  children: string
}

export const MenuTitle = ({ children }: MenuTitleProps) => {
  return (
    <div className='px-4 pt-3 pb-2 font-sans text-xs font-medium text-neutral-700 uppercase'>
      {children}
    </div>
  )
}
