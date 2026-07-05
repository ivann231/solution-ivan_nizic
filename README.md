## 🛠️ Technology Stack

| Technology | Purpose | Description |
| :--- | :--- | :--- |
| **React 19** | Library | Core component-based UI rendering. |
| **Vite** | Build Tool | Fast HMR dev server and optimized Rollup production builds. |
| **TypeScript** | Language | Type safety, static checking, and autocompletion. |
| **TanStack React Query v5** | State & Cache | Async query management, caching, state stale times, and retries. |
| **React Router v7** | Routing | Declarative routing, layout outlets, and search param bindings. |
| **Styled Components** | Styling | CSS-in-JS with full support for theme tokens and variables. |
| **Oxlint** | Linter | Ultra-fast JS/TS linter for maintaining code quality. |

---

## 📂 Project Structure

```text
frontend/
├── public/                 # Static assets
└── src/
    ├── api/                # API client configuration and DummyJSON fetch requests
    │   ├── client.ts       # Axios/Fetch base URL setup
    │   ├── products.ts     # Products, Categories, Search queries
    │   └── auth.ts         # Authentication fetch hooks (placeholder)
    ├── components/         # Reusable UI components
    │   ├── common/         # Button, Loader, SearchInput, Pagination, States
    │   └── products/       # ProductCard, ProductDetail, ProductsGrid
    ├── context/            # React Contexts
    │   ├── ThemeContext.tsx# Dark/Light mode theme state manager
    │   └── AuthContext.tsx # User session context (placeholder)
    ├── hooks/              # Custom React Hooks
    │   ├── useDebounce.ts  # Delay search inputs to throttle API requests
    │   ├── useProducts.ts  # TanStack React Query for product collections
    │   └── useCategories.ts# TanStack React Query for product categories
    ├── layout/             # Page templates and wrapper layouts
    │   └── MainLayout.tsx  # Navbar, Footer, and theme toggles surrounding routes
    ├── pages/              # Routed Page Views
    │   ├── ProductsPage.tsx# Main catalog view with toolbar & pagination
    │   ├── ProductDetailsPage.tsx # Detailed view of individual items
    │   ├── Favourites.tsx  # Saved products (placeholder)
    │   └── Login.tsx       # Authentication screen (placeholder)
    ├── router/             # Routing configuration
    │   └── router.tsx      # Browser router defining app routes
    ├── styles/             # Global styled-component themes
    │   ├── theme.ts        # Light and Dark theme object tokens
    │   ├── ThemeProvider.tsx # Provider connecting context theme state to Styled-Components
    │   └── GlobalStyle.ts  # Typography, reset styling, scrollbars
    ├── types/              # TypeScript typings
    └── main.tsx            # Application entrypoint
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed.

### 📥 Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

### 🏗️ Build & Production

To build the application for production, compile TypeScript and package assets using:
```bash
npm run build
```

You can preview the built files locally with:
```bash
npm run preview
```

### 🧹 Code Linting

Run the ultra-fast Oxlint linter to verify code formatting and standards:
```bash
npm run lint
```

---

## 🗺️ Future Roadmap

- [ ] **Authentication**: Complete the integration of the dummyjson auth tokens within `AuthContext` and create protected routes.
- [ ] **Favorites/Bookmarks**: Fully implement the Favourites page using local storage or backend persistence.
- [ ] **Shopping Cart**: Add standard e-commerce features (add to cart, modify quantity, cart summary, and mock checkout).
- [ ] **React Compiler**: Explore enabling React Compiler rules for further performance optimizations.

---

## 🔗 Live Deployment

https://gorgeous-frangollo-82a0a4.netlify.app/


## AI Usage

- ChatGPT was used to generate a plan of implementation.
- GitHub Copilot was used for code generaton, debugging and fixing TypeScript errors, while programming.
- Google Gemini was used to add dark mode to the application.