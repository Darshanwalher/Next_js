# 🚀 Next.js Learning Journey

> A full learning repository documenting my progress through **Next.js**, **TypeScript**, and building a full-stack e-commerce application from scratch.

---

## 📁 Repository Structure

```
Next_js/
├── TypeScript/          # TypeScript fundamentals & basics
├── next_js_tut/         # Next.js core concepts & tutorials
└── project/             # StreetWear — Full-stack Next.js E-Commerce App
```

---

## 📘 1. TypeScript Basics (`/TypeScript`)

A beginner-level introduction to **TypeScript** concepts using Node.js.

### What I Learned
- Setting up a TypeScript project with `tsconfig.json`
- Declaring variables with **explicit types** (e.g., `const age: number = 45`)
- Understanding the difference between TypeScript and JavaScript
- Compiling and running `.ts` files using `ts-node`

### Tech Stack
| Tool | Purpose |
|------|---------|
| TypeScript | Typed superset of JavaScript |
| Node.js | Runtime environment |

---

## 📗 2. Next.js Tutorial (`/next_js_tut`)

A hands-on tutorial project exploring core **Next.js App Router** features.

### What I Learned

#### 🗂️ File-based Routing & Layouts
- Created **nested route groups** with separate layouts:
  - `authlayout/` — Layout for authentication pages (Login, Register) with `AuthNav`
  - `mainlayout/` — Layout for main app pages (Home, Products, Contact) with `MainNav`
- Understood how `layout.js` wraps child routes and persists across navigation

#### 🧭 Navigation & Routing
- Used `next/link` for **client-side navigation** without page reloads
- Built dedicated `AuthNav` and `MainNav` navigation components for different sections of the app

#### 🧩 Components
- `AuthNav.js` — Navigation bar for the authentication section
- `MainNav.js` — Navigation bar for the main application section

### Route Architecture
```
src/app/
├── layout.js               # Root layout
├── page.js                 # Root page (redirect)
├── authlayout/
│   ├── layout.js           # Auth-specific layout with AuthNav
│   ├── page.js
│   ├── login/              # Login page
│   └── register/           # Register page
└── mainlayout/
    ├── layout.js           # Main layout with MainNav
    ├── page.js
    ├── home/               # Home page
    ├── products/           # Products listing page
    └── contact/            # Contact page
```

### Tech Stack
| Tool | Purpose |
|------|---------|
| Next.js 16 | App Router framework |
| React 19 | UI library |
| Tailwind CSS v4 | Styling |

---

## 🛍️ 3. StreetWear — E-Commerce Project (`/project`)

A **fully-featured streetwear e-commerce application** built with Next.js, demonstrating real-world patterns including authentication, protected routes, API integration, dark mode, and a polished UI.

### ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 Authentication | JWT-based auth with a global `AuthContext` |
| 🛡️ Protected Routes | Auto-redirects unauthenticated users to `/login` |
| 🌓 Dark / Light Mode | System-aware theme toggling via `next-themes` |
| 🛒 Product Catalog | Fetches live products from Fake Store API |
| 📄 Product Detail Page | Dynamic route `[id]` with full product info |
| ❤️ Wishlist Toggle | Client-side wishlist button with state |
| 🔢 Quantity Selector | Increment/Decrement with minimum guard |
| 🎨 ShadCN UI | Professional component library (Card, Badge, Button) |
| 📱 Fully Responsive | Mobile-first design with Tailwind CSS v4 |
| ⚡ Loading States | Custom skeleton/spinner loading UI |
| 🔤 Google Fonts | Inter & Outfit fonts via `next/font/google` |

---

### 🗂️ Project Architecture

```
project/src/
├── app/
│   ├── layout.js                    # Root layout (AuthProvider + ThemeProvider + NavBar)
│   ├── page.js                      # Redirect to /home
│   ├── globals.css                  # Global styles & Tailwind tokens
│   ├── home/
│   │   └── page.js                  # Landing / Hero page (Protected)
│   ├── products/
│   │   ├── page.js                  # Product listing grid (Protected)
│   │   ├── loading.js               # Products loading skeleton
│   │   └── [id]/                    # Dynamic product detail route
│   ├── login/
│   │   └── page.js                  # Login page
│   └── register/
│       └── page.js                  # Registration page
├── components/
│   ├── NavBar.js                    # Sticky top navigation bar
│   ├── ProductCard.js               # Reusable product card with rating & cart
│   ├── ProductDetailsClient.js      # Client component for product detail interaction
│   ├── ProtectedRoute.js            # HOC — redirects unauthenticated users
│   ├── themeProvider.js             # next-themes wrapper component
│   ├── toggleTheme.js               # Dark/Light mode toggle button
│   └── ui/                          # ShadCN UI components (Card, Badge, Button, etc.)
├── context/
│   └── authContext.js               # Global auth state (user, loading, hydrateUser)
└── lib/
    ├── api.js                        # Axios instance with base URL & credentials
    └── utils.js                      # Utility helpers (cn, etc.)
```

---

### 🔑 Key Concepts Implemented

#### Authentication & Context API
- Built a global `AuthContext` using React's `createContext` + `useContext`
- `AuthProvider` hydrates user session on app mount via `GET /api/auth/me`
- Exposed `useAuth()` custom hook for easy consumption in any component

#### Protected Routes
- `ProtectedRoute` component reads `{ user, loading }` from `AuthContext`
- Shows an animated loading spinner while session is being verified
- Redirects to `/login` using `router.replace()` if user is not authenticated

#### Data Fetching
- **Server Components** fetch product data directly (`async/await` in page components)
- Used `cache: "no-store"` for always-fresh data from Fake Store API
- **Client Components** handle interactive UI state (quantity, wishlist, cart feedback)

#### Dark Mode
- Implemented system-aware theme using `next-themes`
- `ThemeProvider` wraps the entire app in `layout.js`
- `ModeToggle` component switches between `light` / `dark` / `system` themes

#### UI & Styling
- Integrated **ShadCN UI** components for a consistent design system
- Used **Tailwind CSS v4** for utility-first styling
- Added smooth hover transitions, scale effects, and `group-hover` patterns
- Sticky glassmorphism navbar with `backdrop-blur-md`

---

### 🧩 Components Breakdown

| Component | Type | Description |
|-----------|------|-------------|
| `NavBar` | Server | Sticky navigation with logo, links & theme toggle |
| `ProductCard` | Server | Card with image, rating, price, category badge & cart button |
| `ProductDetailsClient` | Client | Full product detail with wishlist, quantity selector & cart feedback |
| `ProtectedRoute` | Client | Auth guard HOC with loading spinner |
| `ThemeProvider` | Client | Wraps app with `next-themes` provider |
| `ModeToggle` | Client | Sun/Moon icon toggle for dark/light mode |

---

### 📦 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.2.9 | Full-stack React framework (App Router) |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first CSS framework |
| [ShadCN UI](https://ui.shadcn.com/) | Latest | Accessible component library |
| [Radix UI](https://www.radix-ui.com/) | ^1.6.0 | Headless UI primitives |
| [Axios](https://axios-http.com/) | ^1.18.1 | HTTP client for API requests |
| [next-themes](https://github.com/pacocoursey/next-themes) | ^0.4.6 | Dark/Light mode management |
| [Lucide React](https://lucide.dev/) | ^1.21.0 | Icon library |
| [React Icons](https://react-icons.github.io/) | ^5.6.0 | Additional icon sets |

---

### 🚀 Getting Started

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project
cd Next_js/project

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 🌐 API Integration

| API | Usage |
|-----|-------|
| [Fake Store API](https://fakestoreapi.com/) | Product catalog data (fetched server-side) |
| `api.team-sync.space` | Authentication backend (login, register, `GET /api/auth/me`) |

---

## 🎯 Skills Gained

Through this learning journey, I developed proficiency in:

- ✅ **Next.js App Router** — File-based routing, nested layouts, route groups
- ✅ **React Server & Client Components** — Understanding the boundary and when to use each
- ✅ **Server-side Data Fetching** — `async` server components, `fetch` with cache strategies
- ✅ **Context API** — Global state management with `createContext` and custom hooks
- ✅ **Authentication Patterns** — Session hydration, protected routes, JWT with `withCredentials`
- ✅ **Dark Mode** — System-aware theming with `next-themes`
- ✅ **TypeScript Basics** — Static typing, `tsconfig.json`, type-safe variables
- ✅ **Component Architecture** — Reusable, composable UI components
- ✅ **Tailwind CSS v4** — Responsive layouts, `group-hover`, `dark:` variants
- ✅ **ShadCN UI** — Integrating and customizing a design system
- ✅ **Axios** — Creating a configured API client instance
- ✅ **Dynamic Routes** — `[id]` segments for product detail pages
- ✅ **Loading UI** — `loading.js` convention for instant loading states

---

## 👨‍💻 Author

**Darshan Walher**

> *"Learning by building is the fastest way to grow."*

---

<div align="center">
  <sub>Built with ❤️ while learning Next.js</sub>
</div>
