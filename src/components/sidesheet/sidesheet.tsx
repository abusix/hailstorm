import React, { Fragment } from "react";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import { SidesheetPanel } from "./sidesheet-panel";
import { SidesheetPanelContent } from "./sidesheet-panel-content";
import { SidesheetPanelHeader } from "./sidesheet-panel-header";

export interface SidesheetProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    initialFocus?: React.MutableRefObject<HTMLElement | null>;
}

const Sidesheet = ({ children, isOpen, onClose, initialFocus }: SidesheetProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <HeadlessDialog onClose={onClose} initialFocus={initialFocus}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 z-0"
                    enterTo="opacity-100 z-10"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 z-10"
                    leaveTo="opacity-0 z-0"
                >
                    <div className="fixed inset-0 bg-modal-background" aria-hidden="true" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-x-full"
                    enterTo="-translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="-translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <HeadlessDialog.Panel className="fixed inset-y-0 right-0 z-10 w-184 overflow-y-auto bg-neutral-0">
                        {children}
                    </HeadlessDialog.Panel>
                </Transition.Child>
            </HeadlessDialog>
        </Transition>
    );
};

Sidesheet.Panel = SidesheetPanel;
Sidesheet.PanelHeader = SidesheetPanelHeader;
Sidesheet.PanelContent = SidesheetPanelContent;

export { Sidesheet };
