import type { ReactNode } from 'react'
import { Popover, PopoverProps } from '@headlessui/react'
import { autoUpdate, useFloating } from '@floating-ui/react'
import { PopoverMenuButton } from './popover-menu-button'
import { PopoverMenuContextProvider } from './popover-menu-context'
import { PopoverMenuOverlay } from './popover-menu-overlay'
import { PopoverMenuPanel } from './popover-menu-panel'

export interface PopoverMenuProps extends PopoverProps {
  children: ReactNode
}

const PopoverMenu = ({ children, ...rest }: PopoverMenuProps) => {
  const { refs, floatingStyles } = useFloating({
    placement: 'top-start',
    whileElementsMounted: autoUpdate,
  })

  const context = {
    popoverButton: {
      setReferenceElement: refs.setReference,
    },
    popoverPanel: {
      setFloatingElement: refs.setFloating,
      styles: floatingStyles,
    },
  }

  return (
    <PopoverMenuContextProvider value={context}>
      <Popover {...rest}>{children}</Popover>
    </PopoverMenuContextProvider>
  )
}

PopoverMenu.Button = PopoverMenuButton
PopoverMenu.Panel = PopoverMenuPanel
PopoverMenu.Overlay = PopoverMenuOverlay

export { PopoverMenu }
