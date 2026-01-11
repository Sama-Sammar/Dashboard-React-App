import { useEffect, useState } from "react";
import axios from "axios";//HTTP requests
import { useNavigate } from "react-router-dom";
import UsersList from "../../components/Dashboard/UsersList";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")// list of users 
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/profile")}>
        Go to Profile
      </button>
      {loading ? (// Conditional Rendering
        <p>Loading users...</p>
      ) : (
        <UsersList users={users} />
      )}
    </div>
  );
};

export default Dashboard;
