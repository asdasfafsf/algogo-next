# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AlgoGo is a Korean algorithm learning platform built with Next.js 15, React 19, and TailwindCSS v4. The platform focuses on algorithm practice and problem-solving with a modern, component-driven architecture.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with Turbopack (default port: 3000)
- `npm run build` - Build for production 
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Testing and Documentation
- `npm run storybook` - Start Storybook dev server (port 6006)
- `npm run build-storybook` - Build Storybook
- `npx vitest` - Run tests (configured with Storybook integration and Playwright browser testing)
- `npx vitest --ui` - Run tests with UI interface

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 19, TailwindCSS v4, Radix UI primitives
- **Styling**: class-variance-authority (cva) for component variants
- **Testing**: Vitest with Storybook integration, Playwright for browser testing
- **Documentation**: Storybook with accessibility addon

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Reusable UI components (Button, Card, Input, Typography)
│   ├── modals/            # Modal components (Alert, Confirm, Prompt)
│   ├── auth/              # Authentication components
│   ├── layout/            # Layout components (Header, Footer, Navigation)
│   └── shared/            # Shared components (Chips for problem states/levels/types)
├── domains/               # Feature-based organization
│   └── problem/           # Problem management (filters, pagination, table, cards)
├── hooks/                 # Shared custom hooks (useDebounce, useLocalStorage, useToggle)
├── lib/                   # Utilities (cn function for className merging)
├── plugins/
│   └── modal/            # Modal management system
├── stories/              # Storybook stories
├── styles/               # Global styles and fonts
├── types/                # TypeScript type definitions (auth, problem)
├── constants/            # Application constants (auth, problem)
└── utils/                # Helper functions (format, typography, helpers)
```

### Domain-Driven Architecture
The codebase follows domain-driven design principles with features organized by business domain rather than technical type. Each domain contains its own components and hooks, promoting high cohesion and low coupling.

### Component System
- UI components use `class-variance-authority` for systematic variant management
- Button component supports extensive color variants following Material Design principles
- Components follow Radix UI patterns for accessibility
- Custom font integration with Pretendard for Korean text support

### Modal System
A centralized modal management system is implemented in `src/plugins/modal/` using React Context, providing:
- `ModalProvider` for context management
- `useModal` hook for modal operations
- Pre-built modal components (Alert, Confirm, Prompt)

### Code Style Guidelines
The project follows comprehensive frontend design guidelines defined in `cursorrules`:
- **Readability**: Named constants, abstracted implementation details, simplified conditionals
- **Predictability**: Consistent return types, descriptive names, single responsibility
- **Cohesion**: Feature-based organization, form-level vs field-level validation strategies
- **Coupling**: Scoped state management, component composition over props drilling

### Key Patterns
- Use TypeScript discriminated unions for validation results
- Prefer composition over inheritance for component design
- Implement field-level or form-level validation based on requirements
- Abstract complex interactions into dedicated components
- Use IIFE for complex conditional logic

## Development Notes

### Fonts
- Primary: Pretendard (Korean-optimized)
- Fallback: System fonts with Korean support
- Configured in `src/app/layout.tsx` and `src/styles/fonts.css`

### TailwindCSS v4
- Theme configuration moved to CSS `@theme` directives in `globals.css`
- Content scanning includes Storybook files
- Minimal `tailwind.config.ts` due to v4 architecture

### Testing Strategy
- Vitest integration with Storybook for component testing
- Browser testing with Playwright
- Coverage reporting with v8
- Accessibility testing built into Storybook

### Editor Theme System
A specialized theme system for problem-solving pages (`problem/[problemUuid]`) that provides code editor-based theming:

#### Theme Configuration
- **Default Theme**: vs-dark (gray-900 based color palette)
- **Available Themes**: vs-light, vs-dark
- **Theme Storage**: localStorage with key `algogo-editor-theme`
- **Theme Context**: `EditorThemeContext` with higher priority than general theme

#### Color Application Rules
1. **Problem Area**: Always white background regardless of theme
2. **Code & Result Areas**: Follow editor theme variables
3. **Headers, Footers, Tabs**: Follow editor theme variables
4. **Base Colors**: 
   - Default: gray-900 (#212121) background
   - vs-light override: white background
   - vs-dark: gray-900 background (default)

#### Implementation Guidelines
- Use `bg-editor-page-bg` for main backgrounds
- Use `text-editor-page-text` for primary text
- Use `text-editor-page-text-secondary` for secondary text
- Use `text-editor-page-text-muted` for muted text
- Use `border-editor-page-border` for borders
- **Problem Description**: Force white background with `bg-white` and `text-gray-900`
- **Code/Result Areas**: Use editor theme variables for dynamic theming

#### CSS Variables Structure
```css
/* Default theme colors (vs-dark) */
--theme-background: #212121;
--theme-surface: #212121;
--theme-text-primary: #ffffff;
--theme-text-secondary: #bdbdbd;
--theme-text-muted: #9e9e9e;
--theme-border-primary: #616161;

/* Editor theme variables (inherit from theme) */
--editor-theme-page-background: var(--theme-background);
--editor-theme-page-surface: var(--theme-surface);
/* ... */

/* TailwindCSS integration */
--color-editor-page-bg: var(--editor-theme-page-background);
--color-editor-page-text: var(--editor-theme-page-text-primary);
/* ... */
```

#### Mobile Considerations
- Mobile tabs positioned at bottom for better thumb accessibility
- Safe area padding for devices with notches: `safe-area-padding-bottom`
- Responsive breakpoint: `md` (768px) for desktop/mobile layout switching