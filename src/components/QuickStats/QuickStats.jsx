import useData from "../../hooks/useData";
import styles from "./QuickStats.module.scss";

function QuickStats() {
  const {
    data: dataHotels,
    loading: loadingHotels,
    error: errorHotels,
  } = useData("hotels");
  const {
    data: dataUsers,
    loading: loadingUsers,
    error: errorUsers,
  } = useData("users");

  const userCount = dataUsers?.length || 0;
  const allTreasures =
    dataHotels?.flatMap((hotel) => hotel.treasures || []) || [];
  const uniqueTreasureTitles = new Set(allTreasures.map((t) => t.title));
  const treasureCount = uniqueTreasureTitles.size;
  const cityCount = new Set(dataHotels?.map((hotel) => hotel.city)).size || 0;

  return (
    <div className={styles.container}>
      <div className={styles.statBox}>
        <img
          src="/icons/QuickStats/cities.svg"
          alt="Users"
          className={styles.icon}
        />
        <span className={styles.text}>
          <span className={styles.number}>{userCount}</span> Users
        </span>
      </div>
      <div className={styles.statBox}>
        <img
          src="/icons/QuickStats/treasure.svg"
          alt="Treasure"
          className={styles.icon}
        />
        <span className={styles.text}>
          <span className={styles.number}>{treasureCount}</span> Treasure
        </span>
      </div>
      <div className={styles.statBox}>
        <img
          src="/icons/QuickStats/traveler.svg"
          alt="Users"
          className={styles.icon}
        />
        <span className={styles.text}>
          <span className={styles.number}>{cityCount}</span> Cities
        </span>
      </div>
    </div>
  );
}

export default QuickStats;
