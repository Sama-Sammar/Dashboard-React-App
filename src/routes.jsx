import { Navigate } from "react-router-dom";// inside jsx 
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DashboardGuard from "./guards/dashboard-guard";

const routes = [
    { path: "/", element: <Navigate to="/login" replace /> },// replace: dont back to empty / and dont save in history
    {
        path: "/login",
        element: (
            <DashboardGuard requireAuth={false}>
                <Login />
            </DashboardGuard>
        ),
    },
    {
        path: "/dashboard",
        element: (
            <DashboardGuard requireAuth={true}>
                <Dashboard />
            </DashboardGuard>
        ),
    },
    {
        path: "/profile",
        element: (
            <DashboardGuard requireAuth={true}>
                <Profile />
            </DashboardGuard>
        ),
    },
];

export default routes;
