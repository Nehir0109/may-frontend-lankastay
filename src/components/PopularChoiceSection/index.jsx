import React from "react";
import ChoiceCard from "../ChoiceCard";
import styles from "./PopularChoiceSection.module.scss";

const imageList = [
  "Shangri-La.png",
  "Top-View.png",
  "Green-Villa.png",
  "Boutiqe.png",
  "Modern.png",
  "Silver.png",
  "Rain.png",
  "Cashville.png",
];

const nameList = [
  "Shangri-La",
  "Top View",
  "Green Villa",
  "Boutiqe",
  "Modern",
  "Silver",
  "Rain",
  "Cashville",
];

const locationList = [
  "Colombo, Sri Lanka",
  "Hikkaduwe, Sri Lanka",
  "Kandy, Sri Lanka",
  "Ambalangode, Sri Lanka",
  "Kandy, Sri Lanka",
  "Nuwereliya, Sri Lanka",
  "Dehiwala, Sri Lanka",
  "Ampara, Sri Lanka",
];

const PopularChoiceSection = () => {
  return (
    <section className={styles.popularChoiceSection}>
      
      <div className={styles.cardGrid}>
        {imageList.map((img, index) => (
          <ChoiceCard
            key={index}
            image={`images/PopularChoice/${img}`}
            title={nameList[index]}
            subtitle={locationList[index]}
            isPopular={index === 0 || index === 7}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularChoiceSection;
