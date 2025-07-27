import React, { useEffect, useState } from "react";
import ChoiceCard from "../ChoiceCard";
import styles from "./PopularChoiceSection.module.scss";
import useData from "../../hooks/useData";

const hotelData = [
  { id: null, image: "/images/PopularChoice/Shangri-La.png", title: "Shangri-La", subtitle: "Colombo, Sri Lanka", isPopular: true },
  { id: null, image: "/images/PopularChoice/Top-View.png", title: "Top View", subtitle: "Hikkaduwe, Sri Lanka", isPopular: false },
  { id: null, image: "/images/PopularChoice/Green-Villa.png", title: "Green Villa", subtitle: "Kandy, Sri Lanka", isPopular: false },
  { id: null, image: "/images/PopularChoice/Wooden-Pit.png", title: "Wooden Pit", subtitle: "Ambalangode, Sri Lanka", isPopular: false },
  { id: null, image: "/images/PopularChoice/Boutiqe.png", title: "Boutique", subtitle: "Kandy, Sri Lanka", isPopular: false },
  { id: null, image: "/images/PopularChoice/Modern.png", title: "Modern", subtitle: "Nuwereliya, Sri Lanka", isPopular: false },
  { id: null, image: "/images/PopularChoice/Rain.png", title: "Silver Rain", subtitle: "Dehiwala, Sri Lanka", isPopular: false },
  { id: null, image: "/images/PopularChoice/Cashville.png", title: "Cashville", subtitle: "Ampara, Sri Lanka", isPopular: true },
];

const PopularChoiceSection = () => {
  const { data: apiHotels, loading, error } = useData("hotels");
  const [hotelsWithId, setHotelsWithId] = useState(hotelData);

  useEffect(() => {
    if (apiHotels && apiHotels.length) {
     
      const updatedHotels = hotelData.map((hotel) => {
        const matchedApiHotel = apiHotels.find(
          (apiHotel) => apiHotel.name.toLowerCase() === hotel.title.toLowerCase()
        );
        return {
          ...hotel,
          id: matchedApiHotel ? matchedApiHotel.id : hotel.id,
        };
      });
      setHotelsWithId(updatedHotels);
    }
  }, [apiHotels]);

  if (loading) return <p>Loading popular choices...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className={styles.popularChoiceSection}>
      <div className={styles.cardGrid}>
        {hotelsWithId.map((hotel) => (
          <ChoiceCard
            key={hotel.id || hotel.title} 
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
