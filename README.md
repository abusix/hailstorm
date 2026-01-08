# Hailstorm - Abusix Design System

## Overview

Hailstorm is the Abusix design system: a React 19 component library with
token-driven styling, Storybook documentation, and accessibility-first patterns.
It is built for consistent UI delivery, predictable APIs, and sustainable
engineering workflows.

## Highlights

- Design system foundation: components, tokens, and docs in one place.
- WCAG 2.2 AA-aligned patterns with keyboard-friendly interactions.
- TypeScript-first APIs for reliable composition and reuse.
- Token governance with semantic theming and predictable naming.
- Automated QA via Vitest + Testing Library.

## Modernization notes

This fork upgrades the legacy system into a 2026-ready stack: React 19, Tailwind
v4 tokens, Storybook 10, and modern QA (Vitest + Testing Library). The approach
prioritizes API stability while modernizing tokens, accessibility defaults
(WCAG 2.2 AA), and documentation workflows. It also reinforces the token
pipeline from design to production and improves component-level test coverage.

## Stack

- React 19 + TypeScript
- Tailwind CSS v4 tokens in `src/styles/index.css`
- Headless UI for accessible primitives
- Storybook 10 + MDX for documentation and visual QA
- Vitest + Testing Library + Playwright browser mode for component tests
- Rollup library builds with Vite for local dev

## Installation

```bash
pnpm install
```

## Common commands

```bash
pnpm storybook
pnpm test
pnpm lint
pnpm run build
```

## Documentation

Storybook is the source of truth for component usage, tokens, and examples.
See `Assets/Icons` for the icons gallery and `Foundations` for global styles.

## License

Hailstorm is licensed under the [MIT License](LICENSE).
