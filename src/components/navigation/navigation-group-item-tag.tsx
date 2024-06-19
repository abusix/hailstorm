import React from "react";

interface NavigationGroupItemTagProps {
    children: React.ReactNode;
}

const NavigationGroupItemTag = ({ children }: NavigationGroupItemTagProps) => {
    return (
        <div className="ml-auto rounded border border-neutral-0 px-1.5 text-xs font-semibold uppercase text-neutral-0">
            {children}
        </div>
    );
};

export { NavigationGroupItemTag };
