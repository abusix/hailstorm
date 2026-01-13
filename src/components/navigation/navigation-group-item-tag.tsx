import React from "react";

interface NavigationGroupItemTagProps {
    children: React.ReactNode;
}

const NavigationGroupItemTag = ({ children }: NavigationGroupItemTagProps) => {
    return (
        <div className="border-text-inverse text-text-inverse ml-auto rounded-sm border px-1.5 text-xs font-semibold uppercase">
            {children}
        </div>
    );
};

export { NavigationGroupItemTag };
