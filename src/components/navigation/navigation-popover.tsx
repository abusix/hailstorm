import type { ReactNode } from 'react'
import { Popover } from '@headlessui/react'
import { autoUpdate, useFloating } from '@floating-ui/react'
import { NavigationPopoverButton } from './navigation-popover-button'
import { NavigationPopoverContextProvider } from './navigation-popover-context'
import { NavigationPopoverOverlay } from './navigation-popover-overlay'
import { NavigationPopoverPanel } from './navigation-popover-panel'

export interface NavigationPopoverProps {
  children: ReactNode
}

const NavigationPopover = ({ children }: NavigationPopoverProps) => {
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
    <NavigationPopoverContextProvider value={context}>
      <Popover>{children}</Popover>
    </NavigationPopoverContextProvider>
  )
}

NavigationPopover.Button = NavigationPopoverButton
NavigationPopover.Panel = NavigationPopoverPanel
NavigationPopover.Overlay = NavigationPopoverOverlay

export { NavigationPopover }
