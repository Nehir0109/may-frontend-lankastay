import useData from "../../hooks/useData";
import MostPickedCard from "../MostPickedCard/MostPickedCard";
import styles from "./MostPicked.module.scss";

function MostPicked() {
  const { data, loading, error } = useData("hotels");

  if (error) return <p>Bir hata oluştu.</p>;

  const hotelsToShow = data?.slice(0, 5); // İlk 5 otel

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Most Picked</h2>
      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <MostPickedCard
                key={index}
                skeleton
                className={index === 0 ? styles.large : ""}
              />
            ))
          : hotelsToShow?.map((hotel, index) => (
              <MostPickedCard
                key={hotel.id}
                item={{
                  id: hotel.id,
                  image: hotel.coverImage,
                  name: hotel.name,
                  location: `${hotel.city}, ${hotel.country}`,
                  price: hotel.price,
                }}
                className={index === 0 ? styles.large : ""}
              />
            ))}
      </div>
    </section>
  );
}

export default MostPicked;
