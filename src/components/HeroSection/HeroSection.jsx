import React from 'react'
import roomImage from "../../assets/herosection.png";
import styles from "../HeroSection/HeroSection.module.scss";
import cities from "../../assets/HeroSection/cities.svg";
import treasure from "../../assets/HeroSection/treasure.svg";
import users from "../../assets/HeroSection/users.svg";



const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
         <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Forget Busy Work, <br/> Start Next Vacation</h1>
            <p>We provide what you need to enjoy your <br/>
                holiday with family. 
                Time to make another <br/>
                 memorable moments.</p>

                 <button className={styles.heroButton}>Show More</button>
         
       
         <div className={styles.heroStarts}>
          <div className={styles.users}>
            <img src={users} alt="users" />
            <span>2500 Users</span>
          </div>
          <div className={styles.treasure}>
            <img src={treasure} alt="treasure" />
            <span>200 Treasure</span>
          </div>
          <div className={styles.cities}>
            <img src={cities} alt="cities" />
            <span>100 Cities</span>
          </div>
         </div>
         </div>

         <div className={styles.heroImage}>
            <div className={styles.heroImageBackground}></div>
            <img src={roomImage} alt="Vacation Room" />
         </div>
    </section>
    
  )
}

export default HeroSection