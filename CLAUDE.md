# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React portfolio project featuring Balatro-inspired interactive card components with advanced CSS animations. The project showcases three distinct card states with smooth transitions and 3D transformations.

## Tech Stack

- **Framework**: React 19.2 with Vite 7.2
- **Styling**: Tailwind CSS 4.1 with PostCSS
- **Language**: JavaScript (JSX)
- **Build Tool**: Vite with HMR (Hot Module Replacement)

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint JavaScript/JSX files
npm run lint
```

## Architecture

### Card State System

The Card component (`src/components/Card.jsx`) implements a state-based animation system with three mutually exclusive states:

1. **idle**: Default wobble animation with randomized delays for natural staggered effect
2. **inspect**: 3D tilt inspection on hover using CSS `:has()` selector and 4x4 grid
3. **lift**: Selected/clicked state with elevated z-index and shadow

**State Transitions**:
- `idle` → `inspect`: Mouse enters card (unless in lift state)
- `inspect` → `idle`: Mouse leaves card (unless in lift state)
- `idle/inspect` ↔ `lift`: Click to toggle selection (persists through hover)

### CSS Architecture

Card animations are split into three separate CSS files for clarity:

- **Card.wobble.css**: Ambient wobble animation using CSS `@property` custom properties
  - Uses `--ambientAmount` CSS variable with `@property` for smooth interpolation
  - Randomized animation delay via `--rand` inline style for staggered effect

- **Card.inspection.css**: 3D tilt inspection with 4x4 hover grid
  - Uses CSS `:has()` selector to detect hover position across 16 cells
  - Corner cells have maximum rotation (8deg), edges medium (4deg), center minimal (2deg)
  - CSS custom properties `--x`, `--y`, `--r` control rotation axis and angle

- **Card.lift.css**: Selected/lifted state styling
  - Elevated z-index and box-shadow for depth
  - Larger scale (1.15x) with translateZ for 3D lift effect

### Component Structure

```
src/
├── App.jsx                    # Main app with demo cards
├── main.jsx                   # React entry point
├── index.css                  # Global Tailwind styles
└── components/
    ├── Card.jsx               # Card component with state management
    ├── Card.wobble.css        # Idle wobble animations
    ├── Card.inspection.css    # Hover 3D inspection
    └── Card.lift.css          # Click/lift state
```

## Key Implementation Details

### Random Animation Delays
Each Card instance generates a random delay on mount using `useState(() => Math.random())` to ensure the value is stable across re-renders. This creates natural staggered wobble animations.

### 3D Transforms with CSS Variables
The inspection mode uses inline CSS custom properties (`--x`, `--y`, `--r`) combined with `:has()` selectors to create responsive 3D tilts based on hover position without JavaScript event handlers.

### Hover Grid System
A 4x4 grid of invisible `<i>` elements overlays the card in inspection mode. CSS `:has()` selectors detect which cell is being hovered to calculate the appropriate tilt direction and magnitude.

### State Persistence
The `lift` state overrides hover behavior - once a card is clicked, hovering won't trigger the inspect animation until the card is clicked again to deselect.

## Vite Configuration

The project uses Vite with React plugin and Tailwind CSS Vite plugin for optimal build performance and CSS processing.

## ESLint Configuration

Uses ESLint 9 flat config with:
- React Hooks recommended rules
- React Refresh for Vite
- Custom rule: Allow uppercase unused variables (for React components)
