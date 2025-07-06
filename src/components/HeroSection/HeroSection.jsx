import React, { useEffect, useState } from 'react';
import roomImage from "../../assets/herosection.png";
import styles from "../HeroSection/HeroSection.module.scss";
import useData from '../../hooks/useData';
import usersIcon from "../../assets/HeroSection/users.svg";
import citiesIcon from "../../assets/HeroSection/cities.svg";
import treasureIcon from "../../assets/HeroSection/treasure.svg";


const HeroSection = () => {

   const {data, loading, error} = useData("hotels");
   const [randomHotel, setRandomHotel] = useState(null);

   useEffect(()=> {
    if(data && data.length > 0){
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomHotel(data[randomIndex]);
    }
   }, []);

  
   if (loading) return <p>Loading...</p>;
  if (error) return <p>Hata: {error.message}</p>;
  if (!randomHotel) return null;


 

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {randomHotel.name || "Hotel Name Not Found"}
        </h1>

        <p>
          {randomHotel.description.slice(0, 200) + "..."|| "No description available for this hotel."}
        </p>

        <button className={styles.heroButton}>Explore Now</button>

        <div className={styles.heroStarts}>
          <div>
            <img src={usersIcon} alt="users" />
            <span>{randomHotel.rating} Rating</span>
          </div>
          <div>
            <img src={treasureIcon} alt="treasure" />
            <span>{randomHotel.features?.bedroom || 1} Bedrooms</span>
          </div>
          <div>
            <img src={citiesIcon} alt="cities" />
            <span>{randomHotel.city}, {randomHotel.country}</span>
          </div>
        </div>
      </div>

      <div className={styles.heroImage}>
        <div className={styles.heroImageBackground}></div>
        <img
          src={randomHotel.coverImage}
          alt={randomHotel.name}
        />
      </div>
    </section>
  );
};

export default HeroSection;
