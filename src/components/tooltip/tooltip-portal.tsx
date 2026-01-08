import { useState } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface TooltipPortalProps {
  children: ReactNode
}

export const TooltipPortal = ({ children }: TooltipPortalProps) => {
  const [container] = useState<Element | null>(() =>
    typeof document === 'undefined' ? null : document.body,
  )

  return container ? createPortal(children, container) : null
}
