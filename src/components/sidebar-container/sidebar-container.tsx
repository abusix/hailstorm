import type { ReactNode } from 'react'

interface SidebarContainerProps {
  sidebarContent: ReactNode
  pageContent: ReactNode
}

export const SidebarContainer = ({
  sidebarContent,
  pageContent,
}: SidebarContainerProps) => {
  return (
    <div className='flex grow'>
      {sidebarContent}
      <div className='w-full overflow-x-hidden bg-neutral-50'>
        <div className='mx-auto w-full max-w-285 px-10 py-5'>{pageContent}</div>
      </div>
    </div>
  )
}
