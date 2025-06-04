import React from 'react';
import ChoiceCard from '../TreasureCard/ChoiceCard.jsx';
import styles from './TreasureToChoose.module.scss';

const TreasureToChoose = ({ choices }) => {
    return (
        <section className={styles["treasure-section"]}>
            <h2 className={styles["treasure-title"]}>Treasure to Choose</h2>
            <div className={styles["card-grid"]}>
                {choices.map((choice, index) => (
                    <ChoiceCard
                        key={index}
                        image={choice.image}
                        title={choice.title}
                        subtitle={choice.subtitle}
                        isPopular={choice.isPopular}
                    />
                ))}
            </div>
        </section>
    );
};

export default TreasureToChoose;