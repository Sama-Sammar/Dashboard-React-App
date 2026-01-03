# React Dashboard App

A simple React dashboard application built to practice React Hooks, React Router, protected routes, and component-based structure.

---

## 🚀 Features

- Login page with username input
- Auto focus on input using `useRef`
- Login state stored in `localStorage`
- Protected routes (Dashboard & Profile)
- Fetch users from external API using `axios`
- Navigation between pages using React Router v6 (`createBrowserRouter`)
- Logout functionality
- Clean folder structure (Pages & Components)
- Scoped styling using CSS Modules only (no global/body styling)

---

## 📄 Pages

### 🔐 Login Page (`/login`)
- Username input
- Input auto-focused on load
- Saves login state and username in `localStorage`
- Redirects to Dashboard after login

### 📊 Dashboard Page (`/dashboard`)
- Protected route
- Fetches users from: https://jsonplaceholder.typicode.com/users
- Displays users list
- Button to navigate to Profile page

### 👤 Profile Page (`/profile`)
- Protected route
- Displays logged-in username
- Logout button clears `localStorage` and redirects to Login

---

## 🧠 Technical Stack

- React
- Vite
- React Router DOM (v6+)
- Axios
- CSS Modules

---

## 📁 Project Structure

src/
├── components/
│ ├── Login/
│ │ └── LoginForm/
│ ├── Dashboard/
│ │ └── UsersList/
│ ├── Profile/
│ │ └── LogoutButton/
│ └── ProtectedRoute/
│
├── pages/
│ ├── Login/
│ ├── Dashboard/
│ └── Profile/
│
├── main.jsx
├── App.jsx
├── global.css

---

## 🛡️ Routing & Protection

- Routing is handled using `createBrowserRouter` and `RouterProvider`
- Protected routes are wrapped with a custom `ProtectedRoute` component
- Unauthorized users are redirected to `/login`

---

## 🎨 Styling

- Styling is done using **CSS Modules only**
- No global or `body` styling (as per instructions)
- Each page and component has its own scoped styles

---

## ▶️ How to Run the Project

Install dependencies:
   npm install
Start the development server:
   npm run dev
Open the app in your browser:
   http://localhost:5173

✅ Notes
The App.jsx file is not used because routing is handled directly in main.jsx

The project focuses on React logic rather than heavy UI design

Layout component was not required since there are no shared UI elements