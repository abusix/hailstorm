import React from "react";
import { classNames } from "../../../util/class-names";

export interface TopBarNavLinkProps {
    isActive?: boolean;
    children: React.ReactNode;
}

export const TopBarNavLink = ({ isActive = false, children }: TopBarNavLinkProps) => {
    return (
        <div>
            <div className="group group-focus:ring-border-brand rounded-sm px-4 py-1 group-focus:ring-2 hover:bg-sidebar-bg-hover">
                <div
                    className={classNames(
                        "text-text-inverse relative font-sans text-sm",
                        isActive &&
                            "after:bg-text-inverse after:absolute after:top-7 after:right-0 after:left-0 after:block after:h-0.5"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
