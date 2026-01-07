import { Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import LoginGuard from "./guards/login-guard";
import DashboardGuard from "./guards/dashboard-guard";


const routes = [
    { path: "/", element: <Navigate to="/login" replace /> },

    {
        path: "/login",
        element: (
            <LoginGuard>
                <Login />
            </LoginGuard>
        ),
    },


    {
        path: "/dashboard",
        element: (
            <DashboardGuard>
                <Dashboard />
            </DashboardGuard>
        ),
    },

    {
        path: "/profile",
        element: (
            <DashboardGuard>
                <Profile />
            </DashboardGuard>
        ),
    },
];

export default routes;
