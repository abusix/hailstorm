import { CSSProperties, createContext, useContext } from "react";

export const NavigationPopoverContext = createContext<{
    popoverButton: {
        setReferenceElement: React.Dispatch<React.SetStateAction<HTMLButtonElement | undefined>>;
    };
    popoverPanel: {
        setPopperElement: React.Dispatch<React.SetStateAction<HTMLDivElement | undefined>>;
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
