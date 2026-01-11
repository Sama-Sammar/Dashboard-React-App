import { useEffect, useRef, useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const inputRef = useRef(null);// to hold html element in DOM

  useEffect(() => {
    inputRef.current?.focus(); // focus on load
  }, []);// just once 

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = username.trim();
    if (!trimmed) return;
    onLogin(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        ref={inputRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username..."
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
