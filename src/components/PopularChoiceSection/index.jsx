import React from "react";
import ChoiceCard from "../ChoiceCard";
import styles from "./PopularChoiceSection.module.scss";
import useData from "../../hooks/useData";


const desiredHotelIds = ["6", "7", "8", "9", "10", "11", "12", "13"];

const PopularChoiceSection = () => {
  const { data: apiHotels, loading, error } = useData("hotels");

  if (loading) return <p>Loading popular choices...</p>;
  if (error) return <p>Error loading data</p>;

  
  const idSet = new Set(desiredHotelIds.map(String));

  
  const filteredHotels = apiHotels
    ? apiHotels.filter((hotel) => idSet.has(String(hotel.id)))
    : [];

  return (
    <section className={styles.popularChoiceSection}>
      <div className={styles.cardGrid}>
        {filteredHotels.map((hotel, index) => (
          <ChoiceCard
            key={hotel.id}
            image={hotel.coverImage}
            title={hotel.name}
            subtitle={`${hotel.city}, ${hotel.country}`}
           
            isPopular={index === 0 || index === filteredHotels.length - 1 || hotel.rating >= 4}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularChoiceSection;
