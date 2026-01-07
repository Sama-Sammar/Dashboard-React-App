# React Dashboard App

A simple React dashboard application built to practice React Hooks, React Router (v6+), route guards, and clean project structure.

---

## 🚀 Features

- Login page with username input
- Auto focus on input using `useRef`
- Login state stored in `localStorage`
- **Route Guards**:
  - Prevent access to Dashboard/Profile if not logged in
  - Prevent access to Login page if already logged in
- Fetch users from external API using `axios`
- Navigation using React Router v6 (`createBrowserRouter`)
- Clean folder structure (configs / guards / pages / components)
- Scoped styling using CSS Modules only (no global/body styling)

---

## 📄 Pages & Routes

### `/login`
- Username input (focused automatically)
- Saves:
  - `isLoggedIn`
  - `username`
  in `localStorage`
- Redirects to `/dashboard` after login
- **If user is already logged in → redirected to `/dashboard`**

### `/dashboard` (Protected)
- Accessible only if logged in
- Fetches users from: https://jsonplaceholder.typicode.com/users
- Displays users list
- Button to navigate to `/profile`

### `/profile` (Protected)
- Accessible only if logged in
- Displays logged-in username from `localStorage`
- Logout button clears `localStorage` and redirects to `/login`

---

## 🛡️ Guards Behavior

- **DashboardGuard**:
- If not logged in → redirect to `/login`
- **LoginGuard**:
- If logged in → redirect to `/dashboard`

This ensures users cannot access protected pages via URL without logging in,
and cannot go back to the login page after logging in.

---

## 🧠 Tech Stack

- React + Vite
- React Router DOM (v6+)
- Axios
- CSS Modules

---

## 📁 Project Structure

src/
├── configs/
│ └── router-config.js
├── guards/
│ ├── dashboard-guard.jsx
│ └── login-guard.jsx
├── pages/
│ ├── Login/
│ ├── Dashboard/
│ └── Profile/
├── components/
│ ├── Login/
│ │ └── LoginForm/
│ ├── Dashboard/
│ │ └── UsersList/
│ └── Profile/
│ └── LogoutButton/
├── routes.jsx
├── App.jsx
├── main.jsx
└── global.css

---

## 🔁 Routing Setup

- `routes.jsx`: contains the route definitions array
- `configs/router-config.js`: creates the router using `createBrowserRouter`
- `App.jsx`: renders `<RouterProvider />`
- `main.jsx`: renders `<App />` into the DOM

---

## ▶️ How to Run the Project

1. Install dependencies: npm install
2. Start the development server: npm run dev
3. Open the app: http://localhost:5173

---