# User Dashboard (React + Vite + React Router)

A small user dashboard built with React and Vite.

It displays users in a sortable, searchable, paginated table and supports navigating to a user details page.

## Features

- **User list dashboard**
  - Search (debounced)
  - Sorting (name, email, company)
  - Pagination + “users per page” selector
  - Empty state (“No Users Found”)
  - Loading skeleton table
- **User details page**
  - Fetches a single user by `id`
  - Back button
  - Profile card UI with avatar and user/company/address info
- **Shared layout**
  - Header + Footer across routes via `Layout` + `<Outlet />`

## Tech Stack

- React
- Vite
- React Router

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

## Project Structure (high level)

```text
src/
  components/
    Header.jsx
    Footer.jsx
    Layout.jsx
    LoadingTable.jsx
    UserList.jsx
    UserRow.jsx
    UserCard.jsx
  hooks/
    useUsers.js
    useDebounce.js
  pages/
    Dashboard.jsx
    UserDetails.jsx
  App.jsx
  main.jsx
  App.css
```
