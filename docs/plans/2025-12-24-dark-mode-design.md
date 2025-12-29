# Dark Mode Implementation Design

## Overview

Add dark mode support to the Hailstorm UI component library using CSS semantic tokens and a React ThemeProvider.

## Decisions

| Aspect | Decision |
|--------|----------|
| Theme control | System preference default + manual override |
| Color approach | CSS variables with semantic tokens |
| Migration | Incremental - priority components first |
| API | `<ThemeProvider>` + `useTheme()` hook |
| Toggle component | Not included - consumers build their own |

---

## 1. Semantic Token System

### Token Architecture

Extend `src/styles/index.css` with semantic tokens that map to raw colors differently per theme.

```css
@theme {
  /* Raw colors (existing) - keep as-is */
  --color-neutral-900: #504e61;
  --color-neutral-0: #ffffff;
  /* ... all existing colors stay ... */
}

/* Semantic tokens - light theme (default) */
:root {
  /* Backgrounds */
  --color-bg-base: var(--color-neutral-0);
  --color-bg-subtle: var(--color-neutral-50);
  --color-bg-muted: var(--color-neutral-100);
  --color-bg-emphasis: var(--color-neutral-900);
  --color-bg-primary: var(--color-primary-500);
  --color-bg-success: var(--color-success-100);
  --color-bg-danger: var(--color-danger-100);
  --color-bg-warning: var(--color-warning-100);

  /* Text */
  --color-text-base: var(--color-neutral-900);
  --color-text-muted: var(--color-neutral-600);
  --color-text-subtle: var(--color-neutral-500);
  --color-text-inverse: var(--color-neutral-0);
  --color-text-primary: var(--color-primary-600);

  /* Borders */
  --color-border-default: var(--color-neutral-300);
  --color-border-muted: var(--color-neutral-200);
  --color-border-emphasis: var(--color-neutral-400);
}

/* Dark theme overrides */
.dark {
  --color-bg-base: var(--color-neutral-900);
  --color-bg-subtle: var(--color-neutral-800);
  --color-bg-muted: var(--color-neutral-700);
  --color-bg-emphasis: var(--color-neutral-100);
  --color-bg-primary: var(--color-primary-400);
  --color-bg-success: var(--color-success-900);
  --color-bg-danger: var(--color-danger-900);
  --color-bg-warning: var(--color-warning-900);

  --color-text-base: var(--color-neutral-100);
  --color-text-muted: var(--color-neutral-300);
  --color-text-subtle: var(--color-neutral-400);
  --color-text-inverse: var(--color-neutral-900);
  --color-text-primary: var(--color-primary-300);

  --color-border-default: var(--color-neutral-600);
  --color-border-muted: var(--color-neutral-700);
  --color-border-emphasis: var(--color-neutral-500);
}
```

### Tailwind Integration

Register semantic tokens in the `@theme` layer so they become Tailwind utilities:

```css
@theme {
  --color-bg-base: var(--color-bg-base);
  --color-text-base: var(--color-text-base);
  /* etc. */
}
```

This enables `bg-bg-base`, `text-text-base` class usage in components.

---

## 2. ThemeProvider & useTheme

### File Structure

```
src/
  components/
    theme/
      theme-provider.tsx
      use-theme.ts
      index.ts
```

### ThemeProvider Implementation

```tsx
// theme-provider.tsx
import { createContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'hailstorm-theme'
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (resolved: ResolvedTheme) => {
      root.classList.remove('light', 'dark');
      root.classList.add(resolved);
      setResolvedTheme(resolved);
    };

    if (theme === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(media.matches ? 'dark' : 'light');

      const listener = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? 'dark' : 'light');
      };
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
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
}

export { ThemeContext };
```

### useTheme Hook

```tsx
// use-theme.ts
import { useContext } from 'react';
import { ThemeContext } from './theme-provider';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

### Consumer Usage

```tsx
import { ThemeProvider, useTheme } from '@abusix/hailstorm';

// Wrap app
<ThemeProvider defaultTheme="system">
  <App />
</ThemeProvider>

// Use anywhere
function MyToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle
    </button>
  );
}
```

---

## 3. Component Migration

### Phase 1 Priority Components

| Component | Reason |
|-----------|--------|
| Button | Most used, multiple variants |
| Alert | Intent-based colors |
| Badge | Many color variants |
| Dialog | Backdrop + surface contrast |
| Sidebar | App shell, always visible |
| SidebarMenuLink | App shell navigation |
| TopBar | App shell, brand color |
| Input/TextInput | Core form functionality |
| Card | Common container |

### Migration Pattern

**Before:**
```tsx
const buttonVariants = {
  primary: "bg-primary-500 text-neutral-0 hover:bg-primary-600",
  secondary: "text-neutral-700 bg-neutral-0 border border-neutral-400",
};
```

**After:**
```tsx
const buttonVariants = {
  primary: "bg-bg-primary text-text-inverse hover:bg-primary-600",
  secondary: "text-text-base bg-bg-base border border-border-default",
};
```

### Token Mapping Reference

| Current Class | Semantic Replacement | Usage |
|---------------|---------------------|-------|
| `bg-neutral-0` | `bg-bg-base` | Default backgrounds |
| `bg-neutral-50/100` | `bg-bg-subtle` | Subtle backgrounds |
| `text-neutral-900` | `text-text-base` | Primary text |
| `text-neutral-600` | `text-text-muted` | Secondary text |
| `border-neutral-300` | `border-border-default` | Standard borders |
| `bg-primary-500` | `bg-bg-primary` | Primary actions |
| `text-neutral-0` (on dark bg) | `text-text-inverse` | Inverse text |

---

## 4. Storybook Integration

### Theme Toolbar Toggle

Update `.storybook/preview.ts`:

```ts
import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      return <Story />;
    },
  ],
};

export default preview;
```

### Themed Backgrounds

```ts
parameters: {
  backgrounds: {
    default: 'themed',
    values: [
      { name: 'themed', value: 'var(--color-bg-base)' },
      { name: 'subtle', value: 'var(--color-bg-subtle)' },
    ],
  },
},
```

---

## 5. Future Phases

- Migrate remaining components incrementally
- Optional: Add `<ThemeToggle>` component if requested
- Optional: Support custom color schemes beyond light/dark

---

## Implementation Order

1. Add semantic tokens to `src/styles/index.css`
2. Create `ThemeProvider` and `useTheme` in `src/components/theme/`
3. Export from main index
4. Update Storybook preview config
5. Migrate Phase 1 components one by one
6. Add tests for ThemeProvider
7. Update documentation
