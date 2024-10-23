import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface TooltipPortalProps {
    children: React.ReactNode;
}

export const TooltipPortal = ({ children }: TooltipPortalProps) => {
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (document) {
            ref.current = document.body;
            setMounted(true);
        }
    }, []);

    return mounted && ref.current ? createPortal(children, ref.current) : null;
};
