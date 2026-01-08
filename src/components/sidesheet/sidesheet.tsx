import type { MutableRefObject, ReactNode } from 'react'
import { Fragment } from 'react'
import {
  Dialog as HeadlessUiDialog,
  DialogPanel as HeadlessUiDialogPanel,
  Transition as HeadlessUiTransition,
  TransitionChild as HeadlessUiTransitionChild,
} from '@headlessui/react'
import { SidesheetPanel } from './sidesheet-panel'
import { SidesheetPanelContent } from './sidesheet-panel-content'
import { SidesheetPanelHeader } from './sidesheet-panel-header'

export interface SidesheetProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  initialFocus?: MutableRefObject<HTMLElement | null>
}

const Sidesheet = ({
  children,
  isOpen,
  onClose,
  initialFocus,
}: SidesheetProps) => {
  return (
    <HeadlessUiTransition appear show={isOpen} as={Fragment}>
      <HeadlessUiDialog onClose={onClose} initialFocus={initialFocus}>
        <HeadlessUiTransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 z-0'
          enterTo='opacity-100 z-10'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 z-10'
          leaveTo='opacity-0 z-0'
        >
          <div
            className='bg-modal-background fixed inset-0'
            aria-hidden='true'
          />
        </HeadlessUiTransitionChild>

        <HeadlessUiTransitionChild
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='translate-x-full'
          enterTo='-translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='-translate-x-0'
          leaveTo='translate-x-full'
        >
          <HeadlessUiDialogPanel className='bg-neutral-0 fixed inset-y-0 right-0 z-10 w-184 overflow-y-auto'>
            {children}
          </HeadlessUiDialogPanel>
        </HeadlessUiTransitionChild>
      </HeadlessUiDialog>
    </HeadlessUiTransition>
  )
}

Sidesheet.Panel = SidesheetPanel
Sidesheet.PanelHeader = SidesheetPanelHeader
Sidesheet.PanelContent = SidesheetPanelContent

export { Sidesheet }
