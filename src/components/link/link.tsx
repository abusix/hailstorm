import type { AnchorHTMLAttributes, ElementType, HTMLAttributes } from 'react'
import { cloneElement, isValidElement } from 'react'
import { AsChildProps, Slot } from '../slot/slot'
import { classNames } from '../../util/class-names'

const linkVariants = {
  primary:
    'bg-primary-500 text-neutral-0 hover:bg-primary-600 active:bg-primary-600 focus:ring-2 focus:ring-primary-200 focus:bg-primary-600 disabled:bg-primary-200 fill-neutral-0',
  secondary:
    'text-neutral-700 bg-neutral-0 border border-neutral-400 hover:border-neutral-600 hover:text-neutral-800 active:bg-neutral-100 focus:ring-2 focus:ring-primary-200 focus:text-neutral-800 disabled:text-neutral-500 disabled:border-neutral-300 disabled:bg-neutral-0 fill-neutral-0',
  minimal:
    'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-800 active:bg-neutral-200 focus:ring-2 focus:ring-primary-200 focus:text-neutral-800 disabled:text-neutral-500 disabled:bg-neutral-0 fill-neutral-0',
  danger:
    'text-neutral-0 bg-danger-500 hover:bg-danger-500 active:bg-danger-700 focus:ring-2 focus:ring-danger-100 focus:bg-danger-600 disabled:bg-danger-100 fill-neutral-0',
  'danger-secondary':
    'bg-neutral-0 text-danger-500 border border-danger-400 hover:bg-danger-50 hover:text-danger-600 active:border-danger-700 active:text-danger-700 active:bg-danger-100 focus:ring-2 focus:ring-danger-100 focus:text-danger-600 disabled:border-danger-100 disabled:text-danger-100 disabled:bg-neutral-0 fill-danger-600 disabled:fill-danger-100',
}

const iconVariants = {
  primary: 'text-neutral-0',
  secondary:
    'fill-neutral-600 group-hover:text-neutral-700 group-focus:text-neutral-700 group-disabled:text-neutral-400',
  minimal:
    'fill-neutral-600 group-hover:text-neutral-700 group-focus:text-neutral-700 group-disabled:text-neutral-400',
  danger: '',
  'danger-secondary': '',
}

type LinkProps = AsChildProps<AnchorHTMLAttributes<HTMLAnchorElement>> & {
  className?: string
  variant?: keyof typeof linkVariants
  LeftIcon?: ElementType
  RightIcon?: ElementType
}

export const Link = ({
  variant = 'primary',
  className,
  children,
  LeftIcon,
  RightIcon,
  asChild = false,
  ...props
}: LinkProps) => {
  const Comp = asChild ? Slot : 'a'
  const commonClasses = classNames(
    `group flex h-8 items-center gap-2 whitespace-nowrap rounded-sm px-4 text-xs font-semibold focus:outline-hidden disabled:cursor-not-allowed `,
    linkVariants[variant],
    className,
  )

  if (isValidElement<HTMLAttributes<HTMLElement>>(children)) {
    const childProps = children.props
    return cloneElement(children, {
      ...childProps,
      children: (
        <>
          {LeftIcon ?
            <LeftIcon className={`${iconVariants[variant]} h-3 w-3`} />
          : null}
          {childProps.children}
          {RightIcon ?
            <RightIcon className={`${iconVariants[variant]} h-3 w-3`} />
          : null}
        </>
      ),
      className: classNames(commonClasses, childProps.className),
    })
  }

  return (
    <Comp {...props} className={commonClasses}>
      <>
        {LeftIcon ?
          <LeftIcon className={`${iconVariants[variant]} h-3 w-3`} />
        : null}
        {children}
        {RightIcon ?
          <RightIcon className={`${iconVariants[variant]} h-3 w-3`} />
        : null}
      </>
    </Comp>
  )
}
