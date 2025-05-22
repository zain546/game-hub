# 🎮 GameHub

**GameHub** is a modern web application for discovering and browsing video games. It features a responsive UI, game search, genre and platform filtering, infinite scrolling, and detailed game pages — all powered by the [RAWG Video Games Database API](https://rawg.io/apidocs).

---

## ✨ Features

- 🎮 Browse games by genre and platform
- 🔍 Search for games by name
- 🧭 Sort games by relevance, date added, name, release date, popularity, or rating
- 🔁 Infinite scrolling for seamless exploration
- 💡 Responsive design for desktop and mobile
- 🌙 Dark and light mode toggle
- 📽️ Detailed game pages with screenshots, trailers, and game info

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/) — UI components and theming
- [Zustand](https://zustand-demo.pmnd.rs/) — state management
- [TanStack React Query](https://tanstack.com/query/latest) — data fetching and caching
- [Vite](https://vitejs.dev/) — fast dev server and build tool
- [RAWG API](https://rawg.io/apidocs) — video game database

---

## ⚙️ Getting Started

### 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### 📦 Installation

```bash
git clone <repository-url>
cd game-hub
npm install
```

### 🚀 Development

```bash
npm run dev
```

Then open your browser at [http://localhost:5173](http://localhost:5173)

### 🏗️ Build for Production

```bash
npm run build
```

### 🔍 Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```txt
src/
  components/    # Reusable UI components
  pages/         # Page-level components for routing
  hooks/         # Custom React hooks (e.g., useGames)
  entities/      # TypeScript interfaces for API data
  services/      # API client functions
  data/          # Static genre/platform data
  store.ts       # Zustand store
  theme.ts       # Chakra UI theme setup

public/          # Static assets (e.g., icons, favicon)
```

---

## 🔐 API Key

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs).
For demo purposes, the API key is included in the code. For production, you should **secure the key** using `.env` files and never expose it publicly.

---

## 📄 License

This project is built for educational and demo purposes.
Feel free to explore, learn, and enhance it!

---
