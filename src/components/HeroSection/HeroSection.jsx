import { useEffect, useState } from 'react';
import styles from "../HeroSection/HeroSection.module.scss";
import useData from '../../hooks/useData';
import usersIcon from "../../assets/HeroSection/users.svg";
import citiesIcon from "../../assets/HeroSection/cities.svg";
import treasureIcon from "../../assets/HeroSection/treasure.svg";
import Button from '../ui/Button/Button';
import Skeleton from 'react-loading-skeleton';


const HeroSection = () => {

   const {data, loading, error} = useData("hotels");
   const [randomHotel, setRandomHotel] = useState(null);

   useEffect(()=> {
    if(data && data.length > 0){
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomHotel(data[randomIndex]);
    }
   }, []);

  
  const isLoading  = loading || !randomHotel; 

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {isLoading ? <Skeleton width={120} height={300}/> : randomHotel.name}
        </h1>

        <p className={styles.heroDescription}>
          {isLoading ? <Skeleton count={3}/> : randomHotel.description.slice(0, 200) + "..." }
        </p>

         <Button type="button" className={styles.heroButton}>
          {isLoading ? <Skeleton width={120} height={30}/> : "Explore Now"}
        </Button>

        <div className={styles.heroStarts}>
              <div>
        {isLoading ? <Skeleton circle width={32} height={32} /> : <img src={usersIcon} alt="users" />}
        <span>{isLoading ? <Skeleton width={80} /> : `${randomHotel.rating} Rating`}</span>
      </div>
      <div>
        {isLoading ? <Skeleton circle width={32} height={32} /> : <img src={treasureIcon} alt="treasure" />}
        <span>{isLoading ? <Skeleton width={100} /> : `${randomHotel.features?.bedroom || 1} Bedrooms`}</span>
      </div>
      <div>
        {isLoading ? <Skeleton circle width={32} height={32} /> : <img src={citiesIcon} alt="cities" />}
        <span>{isLoading ? <Skeleton width={150} /> : `${randomHotel.city}, ${randomHotel.country}`}</span>
      </div>
        </div>
      </div>

      <div className={styles.heroImage}>
        <div className={styles.heroImageBackground}></div>
        {isLoading ? (
          <Skeleton width={500} height={350} />
        ): (
          <img
          src={randomHotel.coverImage}
          alt={randomHotel.name}
        />
        )}
        
      </div>
    </section>
  );
};

export default HeroSection;
