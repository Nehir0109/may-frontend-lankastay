import useData from "../../hooks/useData";
import styles from "./QuickStats.module.scss";

function QuickStats() {
  const { data: hotels } = useData("hotels");
  const { data: users } = useData("users");

  const allTreasures = (hotels || []).flatMap((hotel) => hotel.treasures || []);

  const quickStats = {
    userCount: users?.length || 0,
    treasureCount: new Set(allTreasures.map((t) => t.title)).size || 0,
    cityCount: new Set(hotels?.map((hotel) => hotel.city)).size || 0,
  };

  return (
    <div className={styles.container}>
      <div className={styles.statBox}>
        <img
          src="/icons/QuickStats/traveler.svg"
          alt="Users"
          className={styles.icon}
        />
        <span className={styles.text}>
          <span className={styles.number}>{quickStats.userCount}</span> Users
        </span>
      </div>
      <div className={styles.statBox}>
        <img
          src="/icons/QuickStats/treasure.svg"
          alt="Treasure"
          className={styles.icon}
        />
        <span className={styles.text}>
          <span className={styles.number}>{quickStats.treasureCount}</span>{" "}
          Treasure
        </span>
      </div>
      <div className={styles.statBox}>
        <img
          src="/icons/QuickStats/cities.svg"
          alt="Cities"
          className={styles.icon}
        />
        <span className={styles.text}>
          <span className={styles.number}>{quickStats.cityCount}</span> Cities
        </span>
      </div>
    </div>
  );
}

export default QuickStats;
