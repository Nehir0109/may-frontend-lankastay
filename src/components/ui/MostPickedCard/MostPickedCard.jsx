import React from "react";
import styles from "./MostPickedCard.module.scss";

function MostPickedCard({ item, onClick, className = "" }) {
  const { id, image, name, location, price } = item;

  return (
    <div className={`${styles.card} ${className}`} onClick={() => onClick(id)}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.overlay}>
        <p className={styles.name}>{name}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <span className={styles.badge}>${price} per night</span>
    </div>
  );
}

export default MostPickedCard;
