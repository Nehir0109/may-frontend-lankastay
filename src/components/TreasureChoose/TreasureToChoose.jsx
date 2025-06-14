import React, {useEffect} from 'react';
import ChoiceCard from '../TreasureCard/ChoiceCard.jsx';
import styles from './TreasureToChoose.module.scss';

const TreasureToChoose = ({ choices }) => {
    useEffect(() => {
        const getData = () => {
            fetch('https://6829efb0ab2b5004cb3543e3.mockapi.io/api/v1/hotels')
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        };
        getData();
    }, []);


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