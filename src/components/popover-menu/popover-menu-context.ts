import { CSSProperties, createContext, useContext } from "react";

export const PopoverMenuContext = createContext<{
    popoverButton: {
        setReferenceElement: React.Dispatch<React.SetStateAction<HTMLButtonElement | undefined>>;
    };
    popoverPanel: {
        setPopperElement: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
        styles: CSSProperties;
        attributes: { [key: string]: string } | undefined;
    };
}>({
    popoverButton: {
        setReferenceElement: () => {},
    },
    popoverPanel: {
        setPopperElement: () => {},
        styles: {},
        attributes: {},
    },
});

export const usePopoverMenuContext = () => useContext(PopoverMenuContext);

export const PopoverMenuContextProvider = PopoverMenuContext.Provider;
