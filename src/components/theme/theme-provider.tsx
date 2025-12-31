import React, { createContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export interface ThemeContextValue {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

export const ThemeProvider = ({
    children,
    defaultTheme = "system",
    storageKey = "hailstorm-theme",
}: ThemeProviderProps) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === "undefined") return defaultTheme;
        return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    });

    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

    useEffect(() => {
        const root = document.documentElement;

        const applyTheme = (resolved: ResolvedTheme) => {
            // Support both class-based and data-attribute-based theming
            root.classList.remove("light", "dark");
            root.classList.add(resolved);
            root.setAttribute("data-theme", resolved);
            setResolvedTheme(resolved);
        };

        if (theme === "system") {
            const media = window.matchMedia("(prefers-color-scheme: dark)");
            applyTheme(media.matches ? "dark" : "light");

            const listener = (e: MediaQueryListEvent) => {
                applyTheme(e.matches ? "dark" : "light");
            };
            media.addEventListener("change", listener);
            return () => media.removeEventListener("change", listener);
        } else {
            applyTheme(theme);
        }
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        if (typeof window !== "undefined") {
            localStorage.setItem(storageKey, newTheme);
        }
        setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
