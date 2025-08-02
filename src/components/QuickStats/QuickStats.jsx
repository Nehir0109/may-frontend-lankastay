import styles from "./QuickStats.module.scss";

function QuickStats() {
  return (
    <div className={styles.container}>
      <div className={styles.statBox}>
        <img
          src="/icons/QuickStats/cities.svg"
          alt="Users"
          className={styles.icon}
        />
        <span className={styles.text}>
          <span className={styles.number}>2500</span> Users
        </span>
      </div>
      <div className={styles.statBox}>
        <img
          src="/icons/QuickStats/treasure.svg"
          alt="Treasure"
          className={styles.icon}
        />
        <span className={styles.text}>
          <span className={styles.number}>200</span> Treasure
        </span>
      </div>
      <div className={styles.statBox}>
        <img
          src="/icons/QuickStats/traveler.svg"
          alt="Users"
          className={styles.icon}
        />
        <span className={styles.text}>
          <span className={styles.number}>100</span> Cities
        </span>
      </div>
    </div>
  );
}

export default QuickStats;
