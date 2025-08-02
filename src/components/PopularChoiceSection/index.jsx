import React, { useEffect, useState } from "react";
import ChoiceCard from "../ChoiceCard";
import styles from "./PopularChoiceSection.module.scss";
import useData from "../../hooks/useData";

const hotelData = [
  { id: null, image: "/images/PopularChoice/Shangri-La.png", title: "Shangri-La" },
  { id: null, image: "/images/PopularChoice/Top-View.png", title: "Top View" },
  { id: null, image: "/images/PopularChoice/Green-Villa.png", title: "Green Villa" },
  { id: null, image: "/images/PopularChoice/Wooden-Pit.png", title: "Wooden Pit" },
  { id: null, image: "/images/PopularChoice/Boutiqe.png", title: "Boutique" },
  { id: null, image: "/images/PopularChoice/Modern.png", title: "Modern" },
  { id: null, image: "/images/PopularChoice/Rain.png", title: "Silver Rain" },
  { id: null, image: "/images/PopularChoice/Cashville.png", title: "Cashville" },
];

const PopularChoiceSection = () => {
  const { data: apiHotels, loading, error } = useData("hotels");
  const [mergedHotels, setMergedHotels] = useState(hotelData);

  useEffect(() => {
    if (apiHotels?.length) {
      const updatedHotels = hotelData.map((staticHotel, index) => {
        const matched = apiHotels.find(
          (h) => h.name.toLowerCase() === staticHotel.title.toLowerCase()
        );
        return matched
          ? {
              ...staticHotel,
              id: matched.id,
              subtitle: `${matched.city}, ${matched.country}`,
              isPopular: index === 0 || index === hotelData.length - 1 ? true : matched.popular,
            }
          : {
              ...staticHotel,
              subtitle: "Unknown Location",
              isPopular: index === 0 || index === hotelData.length - 1,
            };
      });
      setMergedHotels(updatedHotels);
    }
  }, [apiHotels]);

  if (loading) return <p>Loading popular choices...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className={styles.popularChoiceSection}>
      <div className={styles.cardGrid}>
        {mergedHotels.map((hotel, index) => (
          <ChoiceCard
            key={hotel.id || `static-${index}`}
            image={hotel.image}
            title={hotel.title}
            subtitle={hotel.subtitle}
            isPopular={hotel.isPopular}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularChoiceSection;
