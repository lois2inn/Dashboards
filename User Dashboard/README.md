# User Dashboard (React + Vite + React Router)

A small user dashboard built with React and Vite.

It displays users in a sortable, searchable, paginated table and supports navigating to a user details page.

## Features

- **User list dashboard**
  - Control bar (Search / Sort / Users per page)
  - Search (debounced)
  - Sorting (name, email, company)
  - Pagination
  - Empty state (“No Users Found”)
  - Loading skeleton table
  - Compact table mode (reduced padding)
  - Optional email column (toggle in Settings)
- **User details page**
  - Fetches a single user by `id`
  - Back button
  - Profile card UI with avatar and user/company/address info
  - Tabs: Profile / Posts / Activity
  - Posts list (limited to 5)
  - Skeleton loaders + retry on error
- **Analytics page**
  - Basic stats + grouped breakdowns (company/city/email provider)
- **Settings page**
  - Persisted dashboard preferences (users per page, default sort, compact view, show email)
- **Shared layout**
  - Header + Footer across routes via `Layout` + `<Outlet />`
  - Dark mode toggle (persisted)

## Tech Stack

- React
- Vite
- React Router

## Persistence

- Theme preference is stored in `localStorage` under `dashboard-theme`.
- Dashboard settings are stored in `localStorage` under `dashboard-settings`.

## Data Source

This project uses the public JSONPlaceholder API:

- Users list: `https://jsonplaceholder.typicode.com/users`
- Single user: `https://jsonplaceholder.typicode.com/users/:id`

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (or yarn/pnpm)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in your terminal (typically `http://localhost:5173`).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build

## Routes

- `/` — Dashboard
- `/user/:id` — User Details
- `/analytics` — Analytics
- `/settings` — Settings

## Project Structure (high level)

```text
src/
  components/
    Header.jsx
    Footer.jsx
    Layout.jsx
    LoadingTable.jsx
    Skeleton.jsx
    UserList.jsx
    UserRow.jsx
    UserCard.jsx
    UserCardSkeleton.jsx
    UserPosts.jsx
    UserActivity.jsx
    StatCard.jsx
    AnalyticsSection.jsx
    SimpleBarChart.jsx
  context/
    SettingsContext.jsx
  hooks/
    useUsers.js
    useDebounce.js
  pages/
    Dashboard.jsx
    UserDetails.jsx
    Analytics.jsx
    Settings.jsx
  App.jsx
  main.jsx
  App.css
```
