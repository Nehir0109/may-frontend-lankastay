import React from "react";
import { useNavigate } from "react-router";
import useData from "../../../hooks/useData";
import MostPickedCard from "../MostPickedCard/MostPickedCard";
import styles from "./CardMostPicked.module.scss";

function CardMostPicked() {
  const navigate = useNavigate();
  const { data, loading, error } = useData("hotels");

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Bir hata oluştu.</p>;

  const hotelsToShow = data?.slice(0, 5); // İlk 5 otel

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Most Picked</h2>
      <div className={styles.grid}>
        {hotelsToShow?.map((hotel, index) => (
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
            onClick={handleClick}
          />
        ))}
      </div>
    </section>
  );
}

export default CardMostPicked;
