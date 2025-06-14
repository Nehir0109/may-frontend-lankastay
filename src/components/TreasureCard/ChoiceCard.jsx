import styles from './ChoiceCard.module.scss';

const ChoiceCard = ({ image, title, subtitle, isPopular }) => {
    return (
        <div className={styles["choice-card"]}>
            <div className={styles["choice-card-image-container"]}>
            <img src={image} alt={title} className="choice-card-image" />
            {isPopular && (
                <div className={styles["popular-badge"]}>
                    Popular Choice
                </div>
            )}
            </div>
            <div className={styles["choice-card-content"]}>
                <h3 className={styles["choice-card-title"]}>{title}</h3>
                <p className={styles["choice-card-subtitle"]}>{subtitle}</p>
            </div>
        </div>
    );
};

export default ChoiceCard;