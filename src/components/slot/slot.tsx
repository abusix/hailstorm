import { cloneElement, isValidElement, Children } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../util/class-names'

export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: ReactNode }

export const Slot = ({
  children,
  ...props
}: HTMLAttributes<HTMLElement> & {
  children?: ReactNode
}) => {
  if (isValidElement<HTMLAttributes<HTMLElement>>(children)) {
    const childProps = children.props
    return cloneElement(children, {
      ...props,
      ...childProps,
      style: {
        ...props.style,
        ...childProps.style,
      },
      className: classNames(props.className, childProps.className),
    })
  }

  if (Children.count(children) > 1) {
    Children.only(null)
  }

  return null
}
