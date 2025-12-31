# Dark Mode Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add dark mode support to Hailstorm UI library with semantic tokens and ThemeProvider.

**Architecture:** CSS semantic tokens defined in `:root` and `.dark` selectors, switched via React context. Components migrate from raw color classes to semantic token classes.

**Tech Stack:** Tailwind CSS v4, React Context API, TypeScript

---

## Task 1: Add Semantic Tokens to CSS

**Files:**
- Modify: `src/styles/index.css`

**Step 1: Add semantic token definitions after the @theme block**

Add this CSS after line 104 (after the closing `}` of `@theme`):

```css
/* Semantic color tokens - these switch between light and dark themes */
:root {
    /* Backgrounds */
    --color-bg-base: var(--color-neutral-0);
    --color-bg-subtle: var(--color-neutral-50);
    --color-bg-muted: var(--color-neutral-100);
    --color-bg-emphasis: var(--color-neutral-900);
    --color-bg-primary: var(--color-primary-500);
    --color-bg-primary-hover: var(--color-primary-600);
    --color-bg-success: var(--color-success-100);
    --color-bg-danger: var(--color-danger-100);
    --color-bg-warning: var(--color-warning-100);
    --color-bg-info: var(--color-primary-50);

    /* Text */
    --color-text-base: var(--color-neutral-900);
    --color-text-muted: var(--color-neutral-600);
    --color-text-subtle: var(--color-neutral-500);
    --color-text-inverse: var(--color-neutral-0);
    --color-text-primary: var(--color-primary-600);
    --color-text-success: var(--color-success-600);
    --color-text-danger: var(--color-danger-500);
    --color-text-warning: var(--color-warning-600);

    /* Borders */
    --color-border-default: var(--color-neutral-300);
    --color-border-muted: var(--color-neutral-200);
    --color-border-emphasis: var(--color-neutral-400);
    --color-border-primary: var(--color-primary-400);
    --color-border-success: var(--color-success-400);
    --color-border-danger: var(--color-danger-400);
    --color-border-warning: var(--color-warning-500);
}

/* Dark theme overrides */
.dark {
    /* Backgrounds */
    --color-bg-base: var(--color-neutral-900);
    --color-bg-subtle: var(--color-neutral-800);
    --color-bg-muted: var(--color-neutral-700);
    --color-bg-emphasis: var(--color-neutral-100);
    --color-bg-primary: var(--color-primary-400);
    --color-bg-primary-hover: var(--color-primary-300);
    --color-bg-success: var(--color-success-900);
    --color-bg-danger: var(--color-danger-900);
    --color-bg-warning: var(--color-warning-900);
    --color-bg-info: var(--color-primary-900);

    /* Text */
    --color-text-base: var(--color-neutral-100);
    --color-text-muted: var(--color-neutral-300);
    --color-text-subtle: var(--color-neutral-400);
    --color-text-inverse: var(--color-neutral-900);
    --color-text-primary: var(--color-primary-300);
    --color-text-success: var(--color-success-400);
    --color-text-danger: var(--color-danger-400);
    --color-text-warning: var(--color-warning-400);

    /* Borders */
    --color-border-default: var(--color-neutral-600);
    --color-border-muted: var(--color-neutral-700);
    --color-border-emphasis: var(--color-neutral-500);
    --color-border-primary: var(--color-primary-600);
    --color-border-success: var(--color-success-600);
    --color-border-danger: var(--color-danger-600);
    --color-border-warning: var(--color-warning-600);
}
```

**Step 2: Add semantic tokens to @theme for Tailwind utility generation**

Inside the existing `@theme { }` block (before the closing `}`), add:

```css
    /* Semantic tokens for Tailwind utilities */
    --color-bg-base: var(--color-bg-base);
    --color-bg-subtle: var(--color-bg-subtle);
    --color-bg-muted: var(--color-bg-muted);
    --color-bg-emphasis: var(--color-bg-emphasis);
    --color-bg-primary: var(--color-bg-primary);
    --color-bg-primary-hover: var(--color-bg-primary-hover);
    --color-bg-success: var(--color-bg-success);
    --color-bg-danger: var(--color-bg-danger);
    --color-bg-warning: var(--color-bg-warning);
    --color-bg-info: var(--color-bg-info);

    --color-text-base: var(--color-text-base);
    --color-text-muted: var(--color-text-muted);
    --color-text-subtle: var(--color-text-subtle);
    --color-text-inverse: var(--color-text-inverse);
    --color-text-primary: var(--color-text-primary);
    --color-text-success: var(--color-text-success);
    --color-text-danger: var(--color-text-danger);
    --color-text-warning: var(--color-text-warning);

    --color-border-default: var(--color-border-default);
    --color-border-muted: var(--color-border-muted);
    --color-border-emphasis: var(--color-border-emphasis);
    --color-border-primary: var(--color-border-primary);
    --color-border-success: var(--color-border-success);
    --color-border-danger: var(--color-border-danger);
    --color-border-warning: var(--color-border-warning);
```

**Step 3: Verify CSS compiles**

Run: `npm run build:css`
Expected: No errors

**Step 4: Commit**

```bash
git add src/styles/index.css
git commit -m "feat: add semantic color tokens for dark mode support"
```

---

## Task 2: Create ThemeProvider Component

**Files:**
- Create: `src/components/theme/theme-provider.tsx`

**Step 1: Create theme directory**

```bash
mkdir -p src/components/theme
```

**Step 2: Create ThemeProvider component**

Create `src/components/theme/theme-provider.tsx`:

```tsx
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
            root.classList.remove("light", "dark");
            root.classList.add(resolved);
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
        localStorage.setItem(storageKey, newTheme);
        setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
```

**Step 3: Commit**

```bash
git add src/components/theme/theme-provider.tsx
git commit -m "feat: add ThemeProvider component"
```

---

## Task 3: Create useTheme Hook

**Files:**
- Create: `src/components/theme/use-theme.ts`

**Step 1: Create the hook**

Create `src/components/theme/use-theme.ts`:

```ts
import { useContext } from "react";
import { ThemeContext, ThemeContextValue } from "./theme-provider";

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
```

**Step 2: Commit**

```bash
git add src/components/theme/use-theme.ts
git commit -m "feat: add useTheme hook"
```

---

## Task 4: Create Theme Index and Export

**Files:**
- Create: `src/components/theme/index.ts`
- Modify: `src/components/index.ts`

**Step 1: Create theme index**

Create `src/components/theme/index.ts`:

```ts
export { ThemeProvider } from "./theme-provider";
export type { ThemeProviderProps, Theme, ResolvedTheme, ThemeContextValue } from "./theme-provider";
export { useTheme } from "./use-theme";
```

**Step 2: Add theme export to components index**

In `src/components/index.ts`, add this line at the end:

```ts
export { ThemeProvider, useTheme } from "./theme";
export type { ThemeProviderProps, Theme, ResolvedTheme, ThemeContextValue } from "./theme";
```

**Step 3: Verify build**

Run: `npm run build`
Expected: No errors

**Step 4: Commit**

```bash
git add src/components/theme/index.ts src/components/index.ts
git commit -m "feat: export ThemeProvider and useTheme from library"
```

---

## Task 5: Add ThemeProvider Tests

**Files:**
- Create: `src/components/theme/theme-provider.test.tsx`

**Step 1: Create test file**

Create `src/components/theme/theme-provider.test.tsx`:

```tsx
import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { ThemeProvider } from "./theme-provider";
import { useTheme } from "./use-theme";

const TestComponent = () => {
    const { theme, resolvedTheme, setTheme } = useTheme();
    return (
        <div>
            <span data-testid="theme">{theme}</span>
            <span data-testid="resolved">{resolvedTheme}</span>
            <button onClick={() => setTheme("dark")}>Set Dark</button>
            <button onClick={() => setTheme("light")}>Set Light</button>
            <button onClick={() => setTheme("system")}>Set System</button>
        </div>
    );
};

describe("ThemeProvider", () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.classList.remove("light", "dark");
    });

    it("renders children", () => {
        render(
            <ThemeProvider>
                <div data-testid="child">Hello</div>
            </ThemeProvider>
        );
        expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("defaults to system theme", () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        expect(screen.getByTestId("theme")).toHaveTextContent("system");
    });

    it("applies light class when theme is light", () => {
        render(
            <ThemeProvider defaultTheme="light">
                <TestComponent />
            </ThemeProvider>
        );
        expect(document.documentElement.classList.contains("light")).toBe(true);
        expect(screen.getByTestId("resolved")).toHaveTextContent("light");
    });

    it("applies dark class when theme is dark", () => {
        render(
            <ThemeProvider defaultTheme="dark">
                <TestComponent />
            </ThemeProvider>
        );
        expect(document.documentElement.classList.contains("dark")).toBe(true);
        expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
    });

    it("allows changing theme", async () => {
        render(
            <ThemeProvider defaultTheme="light">
                <TestComponent />
            </ThemeProvider>
        );

        await act(async () => {
            screen.getByText("Set Dark").click();
        });

        expect(screen.getByTestId("theme")).toHaveTextContent("dark");
        expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("persists theme to localStorage", async () => {
        render(
            <ThemeProvider defaultTheme="light" storageKey="test-theme">
                <TestComponent />
            </ThemeProvider>
        );

        await act(async () => {
            screen.getByText("Set Dark").click();
        });

        expect(localStorage.getItem("test-theme")).toBe("dark");
    });
});

describe("useTheme", () => {
    it("throws when used outside ThemeProvider", () => {
        const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

        expect(() => render(<TestComponent />)).toThrow(
            "useTheme must be used within a ThemeProvider"
        );

        consoleError.mockRestore();
    });
});
```

**Step 2: Run tests**

Run: `npm test -- --run`
Expected: All tests pass

**Step 3: Commit**

```bash
git add src/components/theme/theme-provider.test.tsx
git commit -m "test: add ThemeProvider and useTheme tests"
```

---

## Task 6: Update Storybook Preview

**Files:**
- Modify: `.storybook/preview.ts`

**Step 1: Update preview.ts with theme toolbar**

Replace the entire content of `.storybook/preview.ts`:

```ts
import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/index.css";

const preview: Preview = {
    globalTypes: {
        theme: {
            description: "Global theme for components",
            toolbar: {
                title: "Theme",
                icon: "circlehollow",
                items: [
                    { value: "light", icon: "sun", title: "Light" },
                    { value: "dark", icon: "moon", title: "Dark" },
                ],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: "light",
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals.theme || "light";
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(theme);
            return React.createElement(Story);
        },
    ],
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        layout: "centered",
        backgrounds: {
            default: "themed",
            values: [
                { name: "themed", value: "var(--color-bg-base)" },
                { name: "subtle", value: "var(--color-bg-subtle)" },
                { name: "white", value: "#FFFFFF" },
                { name: "dark", value: "#212121" },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                order: ["Home", "Icons gallery"],
            },
            showPanel: true,
        },
    },
    tags: ["autodocs"],
};

export default preview;
```

**Step 2: Verify Storybook runs**

Run: `npm run storybook`
Expected: Storybook opens with theme toggle in toolbar

**Step 3: Commit**

```bash
git add .storybook/preview.ts
git commit -m "feat: add theme toggle to Storybook toolbar"
```

---

## Task 7: Migrate Panel Component

**Files:**
- Modify: `src/components/panel/panel.tsx`

**Step 1: Update Panel to use semantic tokens**

In `src/components/panel/panel.tsx`, change line 10 from:

```tsx
    <div className={classNames("bg-neutral-0 rounded-sm border border-neutral-300 p-5", className)}>
```

to:

```tsx
    <div className={classNames("bg-bg-base rounded-sm border border-border-default p-5", className)}>
```

**Step 2: Verify in Storybook**

Run: `npm run storybook`
Navigate to Panel component, toggle between light and dark themes.
Expected: Panel background and border adapt to theme.

**Step 3: Commit**

```bash
git add src/components/panel/panel.tsx
git commit -m "feat: migrate Panel to semantic tokens"
```

---

## Task 8: Migrate Dialog Component

**Files:**
- Modify: `src/components/dialog/dialog.tsx`

**Step 1: Update Dialog to use semantic tokens**

In `src/components/dialog/dialog.tsx`:

Change line 84 from:
```tsx
                            className={classNames(
                                "bg-neutral-0 flex w-[736px] transform flex-col overflow-y-auto rounded-md shadow-lg transition-all",
```
to:
```tsx
                            className={classNames(
                                "bg-bg-base flex w-[736px] transform flex-col overflow-y-auto rounded-md shadow-lg transition-all",
```

Change line 90 from:
```tsx
                                <HeadlessDialogTitle className="mb-6 pr-12 text-lg font-semibold text-neutral-900">
```
to:
```tsx
                                <HeadlessDialogTitle className="mb-6 pr-12 text-lg font-semibold text-text-base">
```

Change line 108 from:
```tsx
                                    className={classNames(
                                        "bg-neutral-0 sticky bottom-0 left-0 flex flex-row gap-2 px-10 pt-8 pb-8",
```
to:
```tsx
                                    className={classNames(
                                        "bg-bg-base sticky bottom-0 left-0 flex flex-row gap-2 px-10 pt-8 pb-8",
```

**Step 2: Verify in Storybook**

Run: `npm run storybook`
Expected: Dialog background and title text adapt to theme.

**Step 3: Commit**

```bash
git add src/components/dialog/dialog.tsx
git commit -m "feat: migrate Dialog to semantic tokens"
```

---

## Task 9: Migrate Alert Component

**Files:**
- Modify: `src/components/alert/alert.tsx`

**Step 1: Update Alert to use semantic tokens for base text**

In `src/components/alert/alert.tsx`:

Change line 41 from:
```tsx
                "flex flex-row gap-4 rounded-lg border px-4 py-3 text-neutral-800",
```
to:
```tsx
                "flex flex-row gap-4 rounded-lg border px-4 py-3 text-text-base",
```

Change line 50 from:
```tsx
                {children && <div className="pt-1 text-sm text-neutral-800">{children}</div>}
```
to:
```tsx
                {children && <div className="pt-1 text-sm text-text-base">{children}</div>}
```

**Step 2: Run tests**

Run: `npm test -- --run`
Expected: All tests pass

**Step 3: Verify in Storybook**

Expected: Alert text adapts to theme while intent colors remain.

**Step 4: Commit**

```bash
git add src/components/alert/alert.tsx
git commit -m "feat: migrate Alert to semantic tokens"
```

---

## Task 10: Migrate SidebarMenuLink Component

**Files:**
- Modify: `src/components/sidebar/sidebar-menu/sidebar-menu-link/sidebar-menu-link.tsx`

**Step 1: Update SidebarMenuLink to use semantic tokens**

In `src/components/sidebar/sidebar-menu/sidebar-menu-link/sidebar-menu-link.tsx`:

Change lines 12-16 from:
```tsx
            className={classNames(
                "relative px-4 py-3 font-sans text-sm hover:bg-neutral-200 active:bg-neutral-100",
                isActive &&
                    "bg-primary-100 text-primary-400 before:bg-primary-400 hover:bg-primary-100 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-[3px] before:rounded-r-md"
            )}
```
to:
```tsx
            className={classNames(
                "relative px-4 py-3 font-sans text-sm text-text-base hover:bg-bg-muted active:bg-bg-subtle",
                isActive &&
                    "bg-primary-100 text-primary-400 before:bg-primary-400 hover:bg-primary-100 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-[3px] before:rounded-r-md"
            )}
```

**Step 2: Verify in Storybook**

Expected: Sidebar links hover states adapt to theme.

**Step 3: Commit**

```bash
git add src/components/sidebar/sidebar-menu/sidebar-menu-link/sidebar-menu-link.tsx
git commit -m "feat: migrate SidebarMenuLink to semantic tokens"
```

---

## Task 11: Migrate TextInput Component

**Files:**
- Modify: `src/components/form-field/text-input/text-input.tsx`

**Step 1: Update TextInput to use semantic tokens**

In `src/components/form-field/text-input/text-input.tsx`:

Change line 52 from:
```tsx
                    <LeftIcon className="h-3.5 w-3.5 fill-neutral-600 text-gray-400" />
```
to:
```tsx
                    <LeftIcon className="h-3.5 w-3.5 fill-text-muted text-text-muted" />
```

Change lines 63-68 from:
```tsx
                    targetAttachmentIdentifier,
                    "paragraph-100 relative block h-8 w-full rounded-sm border border-neutral-400 py-2 pr-2 pl-3 text-neutral-800 placeholder:text-neutral-600 focus:outline-hidden",
                    LeftIcon && "pl-9",
                    readOnly && "bg-primary-50",
                    disabled && "cursor-not-allowed bg-neutral-100 text-neutral-600",
```
to:
```tsx
                    targetAttachmentIdentifier,
                    "paragraph-100 relative block h-8 w-full rounded-sm border border-border-emphasis py-2 pr-2 pl-3 text-text-base bg-bg-base placeholder:text-text-muted focus:outline-hidden",
                    LeftIcon && "pl-9",
                    readOnly && "bg-bg-info",
                    disabled && "cursor-not-allowed bg-bg-muted text-text-muted",
```

**Step 2: Verify in Storybook**

Expected: TextInput adapts colors to theme.

**Step 3: Commit**

```bash
git add src/components/form-field/text-input/text-input.tsx
git commit -m "feat: migrate TextInput to semantic tokens"
```

---

## Task 12: Run Full Test Suite and Build

**Step 1: Run all tests**

Run: `npm test -- --run`
Expected: All tests pass (11 tests + new ThemeProvider tests)

**Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 3: Final commit for any remaining changes**

```bash
git status
# If any unstaged changes:
git add .
git commit -m "chore: finalize dark mode implementation"
```

---

## Summary

After completing all tasks, the library will have:

1. **Semantic tokens** in `src/styles/index.css` - CSS variables that switch values in `.dark` class
2. **ThemeProvider** - React context for theme state management
3. **useTheme hook** - Easy access to theme state and setter
4. **Storybook integration** - Theme toggle in toolbar
5. **Migrated components** - Panel, Dialog, Alert, SidebarMenuLink, TextInput

Consumers use it like:
```tsx
import { ThemeProvider, useTheme, Button } from '@abusix/hailstorm';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <MyApp />
    </ThemeProvider>
  );
}
```
