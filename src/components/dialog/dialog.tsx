import {
  Description as HeadlessDescription,
  Dialog as HeadlessDialog,
  DialogPanel as HeadlessDialogPanel,
  DialogTitle as HeadlessDialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { Fragment } from 'react'
import type { ReactNode, ReactElement } from 'react'
import { CrossIcon } from '../../icons'
import { classNames } from '../../util/class-names'
import { IconButton } from '../icon-button/icon-button'

export interface DialogProps {
  isShown?: boolean
  title?: string
  onClose?: (submitted: boolean) => void
  isCloseable?: boolean
  className?: string
  children: ReactNode
  footer?: ReactNode | null
  footerPosition?: 'end' | 'start'
  hasBackground?: boolean
  position?: 'center' | 'bottom-right'
}

export const Dialog = ({
  isShown,
  children,
  className,
  isCloseable = true,
  footer,
  footerPosition = 'end',
  onClose,
  title,
  hasBackground = true,
  position = 'center',
}: DialogProps): ReactElement | null => {
  const handleClose = (submitted = false) => {
    if (isCloseable && onClose) {
      onClose(submitted)
    }
  }

  return (
    <Transition show={isShown} as={Fragment}>
      <HeadlessDialog as='div' onClose={handleClose}>
        {hasBackground ?
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div
              className='bg-modal-background fixed inset-0 z-40'
              aria-hidden='true'
              onClick={() => handleClose(true)}
            />
          </TransitionChild>
        : null}

        <div
          className={classNames(
            `fixed inset-0 z-50 flex overflow-y-auto p-8`,
            position === 'bottom-right' && 'items-end justify-end',
            position === 'center' && 'items-center justify-center',
          )}
        >
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4'
            enterTo='opacity-100 translate-y-0'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-4'
          >
            <HeadlessDialogPanel
              className={classNames(
                'bg-neutral-0 flex w-[736px] transform flex-col overflow-y-auto rounded-md shadow-lg transition-all',
                !footer && 'pb-8',
                className,
              )}
            >
              <div className='relative mx-10 mt-10'>
                <HeadlessDialogTitle className='mb-6 pr-12 text-lg font-semibold text-neutral-900'>
                  {title}
                </HeadlessDialogTitle>

                {isCloseable && (
                  <IconButton
                    className='absolute top-0 right-0'
                    Icon={CrossIcon}
                    variant='minimal'
                    onClick={() => handleClose(false)}
                  />
                )}
                <HeadlessDescription as='div'>{children}</HeadlessDescription>
              </div>
              {!!footer && (
                <div
                  id='dialog-footer'
                  className={classNames(
                    'bg-neutral-0 sticky bottom-0 left-0 flex flex-row gap-2 px-10 pt-8 pb-8',
                    footerPosition === 'end' ? 'justify-end' : 'justify-start',
                  )}
                >
                  {footer}
                </div>
              )}
            </HeadlessDialogPanel>
          </TransitionChild>
        </div>
      </HeadlessDialog>
    </Transition>
  )
}
