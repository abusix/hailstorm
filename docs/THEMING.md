# Hailstorm Theming System

## Overview

Hailstorm now supports a flexible theming system with built-in dark mode support. The theming system uses CSS custom properties that automatically adjust based on the active theme.

## Quick Start

### Using ThemeProvider

Wrap your application with the `ThemeProvider` component:

```tsx
import { ThemeProvider } from "@abusix/hailstorm";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="hailstorm-theme">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### Using the Theme Hook

Access and control the theme programmatically:

```tsx
import { useTheme } from "@abusix/hailstorm";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle theme
    </button>
  );
}
```

## Semantic Color Tokens

The theming system introduces semantic color tokens that automatically adapt to the current theme:

### Core Colors

- `--color-background`: Main background color
- `--color-background-secondary`: Secondary background (cards, sections)
- `--color-background-tertiary`: Tertiary background (hover states, inputs)
- `--color-foreground`: Main text color
- `--color-foreground-muted`: Muted text
- `--color-foreground-subtle`: Subtle text (descriptions, hints)
- `--color-border`: Default border color
- `--color-border-hover`: Border color on hover
- `--color-border-focus`: Border color on focus

### Using in Components

Use these semantic tokens in your Tailwind classes:

```tsx
<div className="bg-background text-foreground border border-border">
  <h1 className="text-foreground">Title</h1>
  <p className="text-foreground-muted">Description</p>
</div>
```

## Migrating Components

To migrate existing components to use the theming system:

### Before
```tsx
<div className="bg-neutral-0 text-neutral-900 border-neutral-200">
  Content
</div>
```

### After
```tsx
<div className="bg-background text-foreground border-border">
  Content
</div>
```

## Theme Modes

The system supports three theme modes:

1. **light**: Light theme
2. **dark**: Dark theme
3. **system**: Follows the user's system preference

## Customization

You can customize theme colors by modifying the CSS variables in `src/styles/index.css`:

```css
/* Light mode (default) */
@theme {
  --color-background: var(--color-neutral-0);
  --color-foreground: var(--color-neutral-900);
  /* ... */
}

/* Dark mode */
.dark {
  --color-background: #0a0a0a;
  --color-foreground: #fafafa;
  /* ... */
}
```

## Compatibility with shadcn/ui

This theming system is designed to be compatible with shadcn/ui components. You can now integrate shadcn/ui components directly into Hailstorm with minimal adjustments.

## Examples

See the Dialog component's "DarkMode" story in Storybook for a live example of the theming system in action.