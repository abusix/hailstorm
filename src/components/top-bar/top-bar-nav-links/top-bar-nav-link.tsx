import React from "react";
import { classNames } from "../../../util/class-names";

export interface TopBarNavLinkProps {
    isActive?: boolean;
    children: React.ReactNode;
}

export const TopBarNavLink = ({ isActive = false, children }: TopBarNavLinkProps) => {
    return (
        <div>
            <div className="group rounded px-4 py-1 hover:bg-neutral-800 group-focus:ring-2 group-focus:ring-primary-200">
                <div
                    className={classNames(
                        "relative font-sans text-sm text-neutral-0",
                        isActive &&
                            "after:absolute after:left-0 after:right-0 after:top-7 after:block after:h-0.5 after:bg-neutral-0"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
