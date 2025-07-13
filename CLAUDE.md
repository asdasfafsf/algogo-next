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