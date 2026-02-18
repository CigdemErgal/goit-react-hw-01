import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={avatar} alt={name} width="150" />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
