import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, requireAuth }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (requireAuth && !isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if (!requireAuth && isLoggedIn) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default AuthGuard;
