import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
    children: React.ReactNode;
}

export const TooltipPortal = ({ children }: PortalProps) => {
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (document) {
            ref.current = document.body;
            setMounted(true);
        }
    }, []);

    return mounted && ref.current ? ReactDOM.createPortal(children, ref.current) : null;
};
