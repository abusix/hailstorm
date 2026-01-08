import { useState, cloneElement } from 'react'
import type {
  ReactNode,
  ReactElement,
  HTMLAttributes,
  RefAttributes,
} from 'react'
import { Transition } from '@headlessui/react'
import type { Placement } from '@floating-ui/react'
import { autoUpdate, offset, useFloating } from '@floating-ui/react'
import { classNames } from '../../util/class-names'
import { TooltipPortal } from './tooltip-portal'

interface TooltipProps {
  children: ReactElement
  title: ReactNode
  position?: Placement
  className?: string
  open?: boolean
  onClose?: () => void
  strategy?: 'fixed' | 'absolute' | 'portal'
}

export const Tooltip = ({
  children,
  title,
  position = 'right',
  className,
  open,
  strategy = 'absolute',
}: TooltipProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : uncontrolledOpen

  const { refs, floatingStyles } = useFloating({
    placement: position,
    strategy: strategy === 'fixed' ? 'fixed' : 'absolute',
    middleware: [offset(8)],
    whileElementsMounted: autoUpdate,
  })

  const triggerChild = children as ReactElement<
    HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement>
  >
  const childrenWithRef = cloneElement(triggerChild, {
    ref: refs.setReference,
    onMouseEnter: () => !isControlled && setUncontrolledOpen(true),
    onMouseLeave: () => !isControlled && setUncontrolledOpen(false),
  })

  const renderTooltipContent = () => (
    <Transition
      show={isOpen}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div
        ref={refs.setFloating}
        className={classNames(
          'text-neutral-0 rounded-lg bg-neutral-900 p-4 px-4 py-2 text-xs shadow-sm',
          className,
        )}
        style={floatingStyles}
      >
        {title}
      </div>
    </Transition>
  )

  return (
    <>
      {childrenWithRef}
      {strategy === 'portal' ?
        <TooltipPortal>{renderTooltipContent()}</TooltipPortal>
      : renderTooltipContent()}
    </>
  )
}
