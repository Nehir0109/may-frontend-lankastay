
import styles from "./Alert.module.scss";

const Alert = ({ type = "info", message }) => {
  if (!message) return null;

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;
