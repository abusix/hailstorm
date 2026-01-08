import type { ComponentPropsWithoutRef } from 'react'
import { ReactNode } from 'react'
import {
  DisclosurePanelProps,
  Disclosure as HeadlessUiDisclosure,
  DisclosureButton as HeadlessUiDisclosureButton,
  DisclosurePanel as HeadlessUiDisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '../../icons'
import { classNames } from '../../util/class-names'

const DisclosurePanel = ({
  children,
  ...props
}: Omit<DisclosurePanelProps, 'ref'>) => {
  return (
    <HeadlessUiDisclosurePanel {...props}>{children}</HeadlessUiDisclosurePanel>
  )
}

interface DisclosureButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

const DisclosureButton = ({ children, ...props }: DisclosureButtonProps) => {
  return (
    <HeadlessUiDisclosureButton
      className='headline-300 focus:outline-primary-200 flex w-full items-center justify-between border-t border-b border-t-transparent border-b-neutral-300 bg-neutral-50 py-3 pr-5 pl-3 text-left text-neutral-900 focus:outline-2 focus:outline-offset-0 focus:outline-solid'
      {...props}
    >
      {({ open }) => (
        <>
          <span>{children}</span>
          <ChevronDownIcon
            className={classNames('h-3 w-3', open && 'rotate-180 transform')}
          />
        </>
      )}
    </HeadlessUiDisclosureButton>
  )
}

const Disclosure = ({
  children,
  defaultOpen = false,
}: {
  children: ReactNode
  defaultOpen?: boolean
}) => {
  return (
    <HeadlessUiDisclosure defaultOpen={defaultOpen}>
      {children}
    </HeadlessUiDisclosure>
  )
}

Disclosure.Button = DisclosureButton
Disclosure.Panel = DisclosurePanel

export { Disclosure }
