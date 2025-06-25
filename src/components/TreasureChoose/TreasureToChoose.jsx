import React, {useEffect} from 'react';
import ChoiceCard from '../TreasureCard/ChoiceCard.jsx';
import styles from './TreasureToChoose.module.scss';

const TreasureToChoose = ({ choices }) => {


    return (
        <section className={styles.treasureSection}>
            <h2 className={styles.treasureTitle}>Treasure to Choose</h2>
            <div className={styles.cardGrid}>
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