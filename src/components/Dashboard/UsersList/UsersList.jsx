import styles from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <li key={user.id} className={styles.item}>
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
