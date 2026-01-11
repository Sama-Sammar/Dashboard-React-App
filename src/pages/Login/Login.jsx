import { useNavigate } from "react-router-dom";//hook // inside function 
import LoginForm from "../../components/Login/LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (username) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    navigate("/dashboard", { replace: true }); // redirect after login / after submit event 
  };

  return (
    <div className={styles.wrapper}>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
