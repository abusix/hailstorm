import { CSSProperties, createContext, useContext } from 'react'

export const PopoverMenuContext = createContext<{
  popoverButton: {
    setReferenceElement: (element: HTMLButtonElement | null) => void
  }
  popoverPanel: {
    setFloatingElement: (element: HTMLElement | null) => void
    styles: CSSProperties
  }
}>({
  popoverButton: {
    setReferenceElement: () => {},
  },
  popoverPanel: {
    setFloatingElement: () => {},
    styles: {},
  },
})

export const usePopoverMenuContext = () => useContext(PopoverMenuContext)

export const PopoverMenuContextProvider = PopoverMenuContext.Provider
