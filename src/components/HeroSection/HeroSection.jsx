import React from 'react'
import roomImage from "../../assets/herosection.png";
import styles from "../HeroSection/HeroSection.module.scss";



const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
         <div className={styles.heroContent}>
            <h1>Forget Busy Work, <br/> Start Next Vacation</h1>
            <p>We provide what you need to enjoy your <br/>
                holiday with family. 
                Time to make another <br/>
                 memorable moments.</p>

                 <button className={styles.heroButton}>Show More</button>
         
       
         <div className={styles.heroStarts}>
           <div>🧳  <br/>2500 Users</div>
          <div> 📷  <br/>200 Treasure</div>
          <div> 📍 <br/> 100 Cities</div>
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