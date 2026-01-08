import { CSSProperties, createContext, useContext } from 'react'

export const NavigationPopoverContext = createContext<{
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

export const useNavigationPopoverContext = () =>
  useContext(NavigationPopoverContext)

export const NavigationPopoverContextProvider =
  NavigationPopoverContext.Provider
