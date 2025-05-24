import React from 'react';
import ChoiceCard from './ChoiceCard';
import './TreasureToChoose.scss';

const TreasureToChoose = ({ choices }) => {
    return (
        <section className="treasure-section">
            <h2 className="treasure-title">Treasure to Choose</h2>
            <div className="card-grid">
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