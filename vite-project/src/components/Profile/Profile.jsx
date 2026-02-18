import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          className={styles.avatar}
          src={image}
          alt="User avatar"
          width="120"
        />

        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span>Followers</span>
          <span className={styles.statsValue}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Views</span>
          <span className={styles.statsValue}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Likes</span>
          <span className={styles.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
