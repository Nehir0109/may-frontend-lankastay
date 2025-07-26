import styles from "./MostPickedCard.module.scss";
import { Link } from "react-router";

function MostPickedCard({ item, className = "", skeleton = false }) {
  if (skeleton) {
    return (
      <div className={`${styles.card} ${className}`}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.overlay}>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonText}></div>
        </div>
        <div className={styles.skeletonBadge}></div>
      </div>
    );
  }

  const { id, image, name, location, price } = item;

  return (
    <Link to={`/detail/${id}`} className={`${styles.card} ${className}`}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.overlay}>
        <p className={styles.name}>{name}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <span className={styles.badge}>${price} per night</span>
    </Link>
  );
}

export default MostPickedCard;
