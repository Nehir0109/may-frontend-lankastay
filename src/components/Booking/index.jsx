
import React from "react";
import styles from "./Booking.module.scss";

const Booking = ({ price }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Start Booking</p>
      <p className={styles.price}>
        <span className={styles.amount}>{price}</span>
        <span className={styles.perNight}> per Night</span>
      </p>
      <button className={styles.button}>Book Now</button>
    </div>
  );
};

export default Booking;
