import React from "react";
import ChoiceCard from "../ChoiceCard";
import styles from "./PopularChoiceSection.module.scss";
import useData from "../../hooks/useData";
import { useNavigate } from "react-router";

const desiredHotelIds = ["6", "7", "8", "9", "10", "11", "12", "13"];

const PopularChoiceSection = () => {
  const { data: apiHotels, loading, error } = useData("hotels");
  const navigate = useNavigate();

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
          <div
            key={hotel.id}
            onClick={() => navigate(`/hotels/${hotel.id}`)}
            style={{ cursor: "pointer" }}
          >
            <ChoiceCard
              image={hotel.coverImage}
              title={hotel.name}
              subtitle={`${hotel.city}, ${hotel.country}`}
              isPopular={index === 0 || index === 7}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularChoiceSection;
