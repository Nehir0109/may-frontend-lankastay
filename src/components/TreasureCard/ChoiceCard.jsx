import styles from './ChoiceCard.module.scss';

const ChoiceCard = ({ image, title, subtitle, isPopular }) => {
    return (
        <div className={styles.choiceCard}>
            <div className={styles.choiceCardImageContainer}>
            <img src={image} alt={title} className={styles.choiceCardImage} />
            {isPopular && (
                <div className={styles["popularBadge"]}>
                    Popular Choice
                </div>
            )}
            </div>
            <div className={styles.choiceCardContent}>
                <h3 className={styles.choiceCardTitle}>{title}</h3>
                <p className={styles.choiceCardSubtitle}>{subtitle}</p>
            </div>
        </div>
    );
};

export default ChoiceCard;