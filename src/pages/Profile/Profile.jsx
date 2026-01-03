import LogoutButton from "../../components/Profile/LogoutButton";
import styles from "./Profile.module.css";

const Profile = () => {
  const username = localStorage.getItem("username");

  return (
    <div className={styles.wrapper}>
      <h1>Profile</h1>
      <p>
        Logged in as: <strong>{username}</strong>
      </p>
      <LogoutButton />
    </div>
  );
};

export default Profile;
