import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login", { replace: true });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
