
import styles from "./Footer.module.scss";
import Button from "../ui/Button/Button";

const Footer = () => {
  return (
    <footer className={styles.footerRoot}>
      <div className={styles.footerTop}>
        <div className={styles.brandBlock}>
          <p className={styles.title}>LankaStay.</p>
          <p className={styles.description}>
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>

        <div className={styles.ctaBlock}>
          <p className={styles.hotelOwner}>Become hotel Owner</p>
          <Button className={styles.button}>Register Now</Button>
        </div>
      </div>

      
      <div className={styles.footerBottom}>
        
        <span>Copyright 2024</span>
        <span>All rights reserved</span>
        <span>Salman Faris</span>
      </div>
    </footer>
  );
};

export default Footer;
