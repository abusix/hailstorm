import type { ReactNode } from 'react'
import {
  PopoverPanel as HeadlessUiPopoverPanel,
  PopoverPanelProps as HeadlessUiPopoverPanelProps,
} from '@headlessui/react'
import { usePopoverMenuContext } from './popover-menu-context'
import { PopoverMenuPanelButton } from './popover-menu-panel-button'
import { PopoverMenuPanelDivider } from './popover-menu-panel-divider'
import { PopoverMenuPanelGroup } from './popover-menu-panel-group'
import { PopoverMenuPanelItem } from './popover-menu-panel-item'
import { PopoverMenuPanelTitle } from './popover-menu-panel-title'

export interface PopoverMenuPanelProps extends HeadlessUiPopoverPanelProps {
  children: ReactNode
}

const PopoverMenuPanel = ({ children, ...rest }: PopoverMenuPanelProps) => {
  const {
    popoverPanel: { setFloatingElement, styles },
  } = usePopoverMenuContext()

  return (
    <HeadlessUiPopoverPanel
      ref={setFloatingElement}
      style={styles}
      className='bg-neutral-0 z-40 w-52 rounded-sm py-2 shadow-sm'
      {...rest}
    >
      {children}
    </HeadlessUiPopoverPanel>
  )
}

PopoverMenuPanel.Item = PopoverMenuPanelItem
PopoverMenuPanel.Button = PopoverMenuPanelButton
PopoverMenuPanel.Group = PopoverMenuPanelGroup
PopoverMenuPanel.Divider = PopoverMenuPanelDivider
PopoverMenuPanel.Title = PopoverMenuPanelTitle

export { PopoverMenuPanel }
