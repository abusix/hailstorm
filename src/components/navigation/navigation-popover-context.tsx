import { CSSProperties, createContext, useContext } from "react";

export const NavigationPopoverContext = createContext<{
    popoverButton: {
        setReferenceElement: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
    };
    popoverPanel: {
        setPopperElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
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

export const useNavigationPopoverContext = () => useContext(NavigationPopoverContext);

export const NavigationPopoverContextProvider = NavigationPopoverContext.Provider;
