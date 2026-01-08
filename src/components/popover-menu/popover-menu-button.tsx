import type { ReactNode } from 'react'
import { PopoverButton as HeadlessUiPopoverButton } from '@headlessui/react'
import {
  ButtonProps,
  getButtonClassName,
  getButtonIconClassName,
} from '../button/button'
import { Spinner } from '../spinner'
import { usePopoverMenuContext } from './popover-menu-context'

export interface PopoverMenuButtonProps extends ButtonProps {
  children: ReactNode
}

export const PopoverMenuButton = ({
  variant = 'primary',
  className,
  children,
  loading,
  LeftIcon,
  RightIcon,
  ...restProps
}: PopoverMenuButtonProps) => {
  const {
    popoverButton: { setReferenceElement },
  } = usePopoverMenuContext()

  return (
    <HeadlessUiPopoverButton
      ref={setReferenceElement}
      className={getButtonClassName(variant, className)}
      {...restProps}
    >
      {loading ?
        <Spinner size='small' />
      : null}
      {LeftIcon && !loading ?
        <LeftIcon className={getButtonIconClassName(variant)} />
      : null}
      {children}
      {RightIcon ?
        <RightIcon className={getButtonIconClassName(variant)} />
      : null}
    </HeadlessUiPopoverButton>
  )
}
