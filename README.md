# Dependencies & Tooling

This project is built as a production-ready React + TypeScript template with a complete set of commonly required libraries for application development, API integration, UI development, form handling, testing, code quality, component development, and Git workflow automation.

The goal is to provide a ready-to-use development foundation so that developers can clone the repository and install the complete project dependency tree using:

```bash
npm install
```

> **Note:** Tailwind CSS is already configured in this project and does not need to be installed again.

---

## 1. Core Application Dependencies

These packages are required during application runtime and are therefore listed under `dependencies`.

### React

React is the core UI library used to build the application's component-based user interface.

```bash
npm install react react-dom
```

The project uses:

* `react`
* `react-dom`

React is responsible for rendering the application's UI, while React DOM provides the browser-specific rendering implementation.

---

### React Router DOM

```bash
npm install react-router-dom
```

**Package:** `react-router-dom`

React Router is used for client-side routing.

It allows the application to support multiple pages/routes without performing a full browser reload.

Typical use cases include:

```text
/
 /login
 /dashboard
 /profile
 /settings
```

It can also be used for:

* Nested routes
* Protected routes
* Route parameters
* Navigation
* Layout routes
* Error routes

---

## 2. API & Server-State Management

### Axios

```bash
npm install axios
```

**Package:** `axios`

Axios is used as the HTTP client for communicating with backend APIs.

Typical operations include:

```text
GET
POST
PUT
PATCH
DELETE
```

Example API flow:

```text
React Application
       ↓
     Axios
       ↓
Backend API
       ↓
Database / Services
```

Axios can also be configured with:

* Base URLs
* Request interceptors
* Response interceptors
* Authentication headers
* Error handling
* Timeout configuration

---

### TanStack Query

```bash
npm install @tanstack/react-query
```

**Package:** `@tanstack/react-query`

TanStack Query is used for server-state management.

It provides functionality for:

* API data fetching
* Caching
* Background refetching
* Loading states
* Error states
* Query invalidation
* Mutations
* Pagination
* Synchronizing server state

Instead of manually managing API state with multiple React states, TanStack Query provides a dedicated server-state management layer.

Example architecture:

```text
React Component
      ↓
TanStack Query
      ↓
Axios
      ↓
Backend API
```

---

### TanStack Query Devtools

```bash
npm install @tanstack/react-query-devtools
```

**Package:** `@tanstack/react-query-devtools`

React Query Devtools provides a development interface for inspecting TanStack Query state.

It can help developers inspect:

* Active queries
* Query status
* Cached data
* Query keys
* Stale data
* Refetch behaviour

It is primarily useful during development and debugging.

---

## 3. Icons

### Lucide React

```bash
npm install lucide-react
```

**Package:** `lucide-react`

Lucide React provides a modern SVG-based icon library.

Example use cases:

```text
Navigation icons
Buttons
Dashboard icons
Settings
Search
User interface controls
```

Icons can be imported directly as React components.

---

### React Icons

```bash
npm install react-icons
```

**Package:** `react-icons`

React Icons provides access to multiple popular icon collections through a single React package.

It can be useful when an application requires icons from different icon libraries.

---

## 4. Styling Utilities

> Tailwind CSS is already installed and configured in this project.

The following packages provide additional utilities around Tailwind CSS.

### clsx

```bash
npm install clsx
```

**Package:** `clsx`

`clsx` is used to conditionally construct CSS class names.

Example:

```tsx
className={clsx(
  "rounded-lg px-4 py-2",
  isActive && "bg-primary",
  disabled && "opacity-50"
)}
```

This keeps conditional styling readable and maintainable.

---

### Tailwind Merge

```bash
npm install tailwind-merge
```

**Package:** `tailwind-merge`

`tailwind-merge` helps intelligently merge conflicting Tailwind CSS utility classes.

For example, when multiple classes modify the same CSS property, it can resolve the conflicting Tailwind utilities.

It is particularly useful when building reusable components.

---

### Class Variance Authority

```bash
npm install class-variance-authority
```

**Package:** `class-variance-authority`

CVA is useful for creating reusable component variants.

For example, a button can support:

```text
primary
secondary
outline
destructive
ghost
```

and different sizes:

```text
small
medium
large
```

This is especially useful when implementing a reusable design system.

---

### Tailwind Animation Utilities

```bash
npm install tw-animate-css
```

**Package:** `tw-animate-css`

This package provides animation utilities that can be used alongside Tailwind CSS.

It can be used for:

* Component transitions
* Enter/exit animations
* UI interactions
* Dialog animations
* Dropdown animations

---

## 5. Forms & Validation

### React Hook Form

```bash
npm install react-hook-form
```

**Package:** `react-hook-form`

React Hook Form provides performant form state management for React applications.

It handles:

* Form state
* Validation
* Submission
* Field registration
* Error handling
* Controlled/uncontrolled inputs

It is suitable for forms such as:

```text
Login
Registration
Profile
Settings
Contact
Admin panels
```

---

### Zod

```bash
npm install zod
```

**Package:** `zod`

Zod provides schema-based validation.

A schema can describe the expected structure and validation rules of data.

Typical usage:

```text
Form Input
    ↓
Zod Schema
    ↓
Validation
    ↓
Valid / Invalid
```

Zod can also be used for validating API responses and application configuration.

---

### React Hook Form Resolvers

```bash
npm install @hookform/resolvers
```

**Package:** `@hookform/resolvers`

This package connects React Hook Form with validation libraries such as Zod.

Typical architecture:

```text
React Hook Form
       ↓
Resolver
       ↓
Zod
       ↓
Validation Result
```

---

## 6. Notifications

### Sonner

```bash
npm install sonner
```

**Package:** `sonner`

Sonner provides toast notifications for React applications.

Typical use cases:

```text
Success
Error
Warning
Information
Loading
```

Example scenarios:

```text
"Profile updated successfully"
"Failed to save changes"
"File uploaded successfully"
```

---

### React Hot Toast

```bash
npm install react-hot-toast
```

**Package:** `react-hot-toast`

React Hot Toast is another notification library for displaying toast messages.

Both `sonner` and `react-hot-toast` are available in the template so the project can support different notification approaches.

> For a specific application, choose one notification system and use it consistently rather than using both simultaneously without a reason.

---

## 7. Date & General Utilities

### Day.js

```bash
npm install dayjs
```

**Package:** `dayjs`

Day.js is used for date and time manipulation.

Common operations include:

* Formatting dates
* Comparing dates
* Adding/subtracting time
* Parsing dates
* Displaying relative dates

Example:

```text
2026-09-17
17 Sep 2026
17/09/2026
```

---

### date-fns

```bash
npm install date-fns
```

**Package:** `date-fns`

`date-fns` provides modular utilities for working with JavaScript dates.

It can be used for:

* Date calculations
* Formatting
* Date comparisons
* Date ranges
* Time intervals

> Both Day.js and date-fns are installed. Individual applications should normally standardize on one date utility approach.

---

### Lodash

```bash
npm install lodash
```

**Package:** `lodash`

Lodash provides reusable utility functions for common JavaScript operations.

Common use cases include:

* Object manipulation
* Array manipulation
* Deep comparison
* Debouncing
* Throttling
* Data transformation

---

### UUID

```bash
npm install uuid
```

**Package:** `uuid`

UUID generates universally unique identifiers.

It can be used for:

* Temporary IDs
* Client-side entities
* Request identifiers
* File identifiers
* Correlation identifiers

---

## 8. Charts & Data Visualization

### Recharts

```bash
npm install recharts
```

**Package:** `recharts`

Recharts provides React components for creating charts and data visualizations.

Common chart types include:

```text
Line Chart
Bar Chart
Area Chart
Pie Chart
Radar Chart
```

This makes the template suitable for applications containing:

* Admin dashboards
* Analytics
* Monitoring
* Reporting
* Business intelligence interfaces

---

## 9. Theme Management

### Next Themes

```bash
npm install next-themes
```

**Package:** `next-themes`

Although the package originated around Next.js usage, it can also be used in React applications where theme state is managed through the browser.

It can support themes such as:

```text
Light
Dark
System
```

Typical use cases include:

```text
Theme switcher
Dark mode
Light mode
System preference detection
```

---

## 10. Environment Configuration

### dotenv

```bash
npm install dotenv
```

**Package:** `dotenv`

`dotenv` loads environment variables from `.env` files in Node-based tooling and scripts.

Example:

```env
API_URL=
API_KEY=
```

> Frontend environment variables in Vite follow Vite's environment-variable conventions. Sensitive secrets must never be placed in client-side environment variables because frontend values are ultimately exposed to the browser.

---

# 11. TypeScript Development Dependencies

The project uses TypeScript for static type checking.

### Node.js Types

```bash
npm install -D @types/node
```

Provides TypeScript type definitions for Node.js APIs.

It is useful when configuration files or tooling use Node.js functionality.

---

### Lodash Types

```bash
npm install -D @types/lodash
```

Provides TypeScript definitions for Lodash.

---

### UUID Types

```bash
npm install -D @types/uuid
```

Provides TypeScript definitions for UUID usage.

---

# 12. ESLint

ESLint is used for static code analysis and identifying potential problems in the codebase.

The project includes:

```bash
npm install -D eslint @eslint/js
```

ESLint helps identify:

* Coding issues
* Potential bugs
* Unused code
* Incorrect patterns
* Maintainability problems

Run:

```bash
npm run lint
```

---

## ESLint React Plugins

```bash
npm install -D eslint-plugin-react-hooks eslint-plugin-react-refresh
```

### `eslint-plugin-react-hooks`

Provides linting rules for React Hooks.

It helps detect incorrect Hook usage such as:

```text
Incorrect dependency arrays
Invalid Hook usage
Hook ordering problems
```

### `eslint-plugin-react-refresh`

Provides linting support for React Fast Refresh compatibility.

---

## TypeScript ESLint

```bash
npm install -D typescript-eslint
```

`typescript-eslint` allows ESLint to understand and lint TypeScript code.

It provides TypeScript-specific linting rules.

---

## ESLint Globals

```bash
npm install -D globals
```

Provides predefined global variable definitions for different environments.

---

## ESLint Import Rules

```bash
npm install -D eslint-plugin-import eslint-import-resolver-typescript
```

These packages help ESLint understand and validate module imports.

They are useful for:

* Import validation
* Import resolution
* Detecting unresolved modules
* TypeScript path resolution

---

## Unused Imports

```bash
npm install -D eslint-plugin-unused-imports
```

Helps detect and manage unused imports.

This keeps the codebase cleaner by preventing unnecessary imports from accumulating.

---

# 13. Prettier

### Prettier

```bash
npm install -D prettier
```

Prettier is used for automatic code formatting.

It can format:

```text
TypeScript
TSX
JavaScript
JSON
CSS
Markdown
```

Typical command:

```bash
npx prettier --write .
```

The purpose of Prettier is to maintain consistent formatting across the entire team.

---

# 14. Testing

The project uses **Vitest + React Testing Library**.

## Vitest

```bash
npm install -D vitest
```

Vitest is the testing framework used for unit and integration testing.

Example:

```text
Component
    ↓
Test
    ↓
Vitest
    ↓
Pass / Fail
```

---

## JSDOM

```bash
npm install -D jsdom
```

JSDOM provides a browser-like DOM environment for tests running in Node.

It allows React components to be tested without launching a real browser.

---

## React Testing Library

```bash
npm install -D @testing-library/react
```

React Testing Library provides utilities for rendering and testing React components.

The testing philosophy focuses on testing the application from the user's perspective.

---

## Testing Library DOM

```bash
npm install -D @testing-library/dom
```

Provides DOM testing utilities used by Testing Library.

---

## Jest DOM

```bash
npm install -D @testing-library/jest-dom
```

Provides additional DOM assertions.

For example:

```text
toBeInTheDocument()
toBeVisible()
toHaveTextContent()
toBeDisabled()
```

---

## User Event

```bash
npm install -D @testing-library/user-event
```

Provides realistic user interaction simulation.

Examples:

```text
Click
Type
Keyboard interaction
Select
Tab
Focus
```

---

## Coverage

```bash
npm install -D @vitest/coverage-v8
```

Provides code coverage reporting for Vitest.

Coverage can help identify which parts of the application are actually covered by tests.

---

# 15. Git Hooks

### Husky

```bash
npm install -D husky
```

Husky allows Git hooks to execute project commands automatically.

Possible hooks include:

```text
pre-commit
commit-msg
pre-push
```

For example:

```text
Developer
   ↓
git commit
   ↓
Husky
   ↓
Lint / Test / Validation
   ↓
Commit
```

---

### lint-staged

```bash
npm install -D lint-staged
```

`lint-staged` runs commands only against files currently staged for Git.

This avoids unnecessarily processing the entire repository during every commit.

---

# 16. Commit Standards

### Commitlint

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

Commitlint validates Git commit messages.

The project can follow Conventional Commits such as:

```text
feat: add authentication
fix: resolve login validation
docs: update installation guide
refactor: simplify API service
test: add dashboard tests
chore: update dependencies
```

This makes the Git history more consistent and readable.

---

### Commitizen

```bash
npm install -D commitizen
```

Commitizen provides an interactive interface for creating standardized commit messages.

---

### cz-git

```bash
npm install -D cz-git
```

`cz-git` provides configurable Conventional Commit prompts for Commitizen.

---

# 17. Vite Development Utilities

### vite-tsconfig-paths

```bash
npm install -D vite-tsconfig-paths
```

This package allows Vite to understand TypeScript path aliases.

For example:

```text
@/components
@/hooks
@/services
@/utils
```

instead of long relative imports:

```text
../../../components
```

This becomes especially useful as the project grows.

---

### Rollup Plugin Visualizer

```bash
npm install -D rollup-plugin-visualizer
```

This package provides bundle analysis.

It can help identify:

```text
Large dependencies
Bundle size
Duplicate modules
Code splitting
```

This is useful when optimizing production builds.

---

# 18. Storybook

### Storybook

```bash
npm install -D storybook @storybook/react-vite
```

Storybook provides an isolated development environment for React components.

Instead of developing a component only inside a page, components can be developed independently.

Example:

```text
Button
├── Primary
├── Secondary
├── Outline
└── Disabled
```

Storybook is particularly useful for:

* Design systems
* Reusable components
* UI documentation
* Component testing
* Team collaboration

---

# 19. Complete Dependency Installation

All runtime dependencies can be installed using:

```bash
npm install react-router-dom @tanstack/react-query @tanstack/react-query-devtools axios lucide-react tw-animate-css clsx tailwind-merge class-variance-authority react-hook-form zod @hookform/resolvers sonner react-hot-toast dayjs date-fns lodash uuid recharts next-themes dotenv react-icons
```

All development dependencies can be installed using:

```bash
npm install -D @types/node @types/lodash @types/uuid eslint prettier eslint-config-prettier eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint globals eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-unused-imports vitest jsdom @vitest/coverage-v8 @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/dom husky lint-staged @commitlint/cli @commitlint/config-conventional commitizen cz-git rollup-plugin-visualizer vite-tsconfig-paths storybook @storybook/react-vite
```

> Tailwind CSS itself is already installed in the project, so it is intentionally not included in these commands.

---

# 20. Dependency Categories

The template provides the following development foundation:

| Category              | Main Packages             |
| --------------------- | ------------------------- |
| UI Framework          | React                     |
| Language              | TypeScript                |
| Build Tool            | Vite                      |
| Routing               | React Router              |
| API Client            | Axios                     |
| Server State          | TanStack Query            |
| Styling               | Tailwind CSS              |
| UI Utilities          | clsx, tailwind-merge, CVA |
| Icons                 | Lucide React, React Icons |
| Forms                 | React Hook Form           |
| Validation            | Zod                       |
| Notifications         | Sonner, React Hot Toast   |
| Dates                 | Day.js, date-fns          |
| Utilities             | Lodash, UUID              |
| Charts                | Recharts                  |
| Theme                 | next-themes               |
| Testing               | Vitest                    |
| Component Testing     | React Testing Library     |
| Test Environment      | JSDOM                     |
| Coverage              | Vitest Coverage           |
| Code Quality          | ESLint                    |
| Formatting            | Prettier                  |
| Git Hooks             | Husky                     |
| Staged Checks         | lint-staged               |
| Commit Standards      | Commitlint                |
| Commit CLI            | Commitizen, cz-git        |
| Component Development | Storybook                 |
| Bundle Analysis       | Rollup Visualizer         |
| Vite Utilities        | vite-tsconfig-paths       |

---

# 21. Installation Verification

After cloning the repository, a developer only needs to install the project dependencies:

```bash
npm install
```

Then verify the application:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Run the production build:

```bash
npm run build
```

Run tests:

```bash
npx vitest run
```

Format the project:

```bash
npx prettier --write .
```

The repository does **not** automatically install or execute infrastructure tools such as:

```text
Docker
Kubernetes
kubectl
Minikube
Helm
Kustomize
Terraform
FluxCD
Tekton
NGINX
```

Those directories are provided only as a standardized project structure. Developers are free to configure and execute their infrastructure workflows according to their application's requirements.

---

# 22. Development Philosophy

This template follows a simple principle:

```text
Clone
  ↓
npm install
  ↓
Dependencies Ready
  ↓
Project Structure Ready
  ↓
Start Development
```

Infrastructure and deployment tooling remain intentionally separated from application dependency installation.

This allows developers to use the same project structure while maintaining complete control over their own:

* Application architecture
* Backend implementation
* Docker configuration
* Kubernetes configuration
* CI/CD pipelines
* GitOps configuration
* Cloud infrastructure
* Deployment strategy
