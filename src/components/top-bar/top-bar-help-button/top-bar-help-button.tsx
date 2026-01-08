import { ChevronDownIcon, HelpIcon } from '../../../icons'

export const TopBarHelpButton = () => {
  return (
    <div className='flex gap-1'>
      <HelpIcon className='fill-primary-200 h-4 w-4' />
      <ChevronDownIcon className='h-4 w-4 fill-neutral-400' />
    </div>
  )
}
