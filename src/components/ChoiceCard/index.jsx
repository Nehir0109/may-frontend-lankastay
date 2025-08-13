import React from "react";
import styles from "./ChoiceCard.module.scss";

const ChoiceCard = ({ image, title, subtitle, isPopular }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        {isPopular && <div className={styles.popularLabel}>Popular Choice</div>}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ChoiceCard;
