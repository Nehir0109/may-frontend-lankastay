import React from "react";
import ChoiceCard from "../ChoiceCard";
import styles from "./PopularChoiceSection.module.scss";

const hotelData = [
  {
    id: 1,
    image: "/images/PopularChoice/Shangri-La.png",
    title: "Shangri-La",
    subtitle: "Colombo, Sri Lanka",
    isPopular: true,
  },
  {
    id: 2,
    image: "/images/PopularChoice/Top-View.png",
    title: "Top View",
    subtitle: "Hikkaduwe, Sri Lanka",
    isPopular: false,
  },
  {
    id: 3,
    image: "/images/PopularChoice/Green-Villa.png",
    title: "Green Villa",
    subtitle: "Kandy, Sri Lanka",
    isPopular: false,
  },
  {
    id: 4,
    image: "/images/PopularChoice/Wooden-Pit.png",
    title: "Wooden Pit",
    subtitle: "Ambalangode, Sri Lanka",
    isPopular: false,
  },
  {
    id: 5,
    image: "/images/PopularChoice/Boutiqe.png",
    title: "Boutique",
    subtitle: "Kandy, Sri Lanka",
    isPopular: false,
  },
  {
    id: 6,
    image: "/images/PopularChoice/Modern.png",
    title: "Modern",
    subtitle: "Nuwereliya, Sri Lanka",
    isPopular: false,
  },
  {
    id: 7,
    image: "/images/PopularChoice/Rain.png",
    title: "Silver Rain",
    subtitle: "Dehiwala, Sri Lanka",
    isPopular: false,
  },
  {
    id: 8,
    image: "/images/PopularChoice/Cashville.png",
    title: "Cashville",
    subtitle: "Ampara, Sri Lanka",
    isPopular: true,
  },
];

const PopularChoiceSection = () => {
  return (
    <section className={styles.popularChoiceSection}>
      <div className={styles.cardGrid}>
        {hotelData.map((hotel) => (
          <ChoiceCard
            key={hotel.id}
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
