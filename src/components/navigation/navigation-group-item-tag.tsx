import type { ReactNode } from 'react'

interface NavigationGroupItemTagProps {
  children: ReactNode
}

const NavigationGroupItemTag = ({ children }: NavigationGroupItemTagProps) => {
  return (
    <div className='border-neutral-0 text-neutral-0 ml-auto rounded-sm border px-1.5 text-xs font-semibold uppercase'>
      {children}
    </div>
  )
}

export { NavigationGroupItemTag }
