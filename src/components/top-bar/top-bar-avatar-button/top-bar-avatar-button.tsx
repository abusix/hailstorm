import { ChevronDownIcon } from '../../../icons'
import { Avatar } from '../../avatar'
import { Menu } from '../../menu'

export interface TopBarAvatarButtonProps {
  children: string
}

export const TopBarAvatarButton = ({ children }: TopBarAvatarButtonProps) => {
  return (
    <Menu.Button className='hover:bg-primary-900 focus:ring-primary-200 flex items-center gap-1 rounded-sm px-1 py-1 focus:ring-2 focus:outline-hidden'>
      <Avatar color='primary'>{children}</Avatar>
      <ChevronDownIcon className='h-4 w-4 fill-neutral-400' />
    </Menu.Button>
  )
}
