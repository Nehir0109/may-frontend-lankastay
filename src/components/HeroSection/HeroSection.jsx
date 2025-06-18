import React from 'react';
import roomImage from "../../assets/herosection.png";
import styles from "../HeroSection/HeroSection.module.scss";
import cities from "../../assets/HeroSection/cities.svg";
import treasure from "../../assets/HeroSection/treasure.svg";
import users from "../../assets/HeroSection/users.svg";

const HeroSection = () => {
  const heroData = {
    title: "Forget Busy Work,\nStart Next Vacation",
    description:
      "We provide what you need to enjoy your holiday with family. || Time to make another memorable moments.",
    buttonText: "Show More",
    stats: [
      {
        icon: users,
        label: "2500 Users",
        alt: "users"
      },
      {
        icon: treasure,
        label: "200 Treasure",
        alt: "treasure"
      },
      {
        icon: cities,
        label: "100 Cities",
        alt: "cities"
      }
    ],
    image: roomImage
  };

  
  const formattedTitle = heroData.title.replace(/\n/g, "<br />");
  const formattedDescription = heroData.description.replace(/\|\|/g, "<br />");

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1
          className={styles.heroTitle}
          dangerouslySetInnerHTML={{ __html: formattedTitle }}
        />
        <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />

        <button className={styles.heroButton}>{heroData.buttonText}</button>

        <div className={styles.heroStarts}>
          {heroData.stats.map((item, i) => (
            <div key={i}>
              <img src={item.icon} alt={item.alt} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.heroImage}>
        <div className={styles.heroImageBackground}></div>
        <img src={heroData.image} alt="Vacation Room" />
      </div>
    </section>
  );
};

export default HeroSection;
