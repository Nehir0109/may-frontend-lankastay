import React from 'react';
import './ChoiceCard.scss';

const ChoiceCard = ({ image, title, subtitle, isPopular }) => {
    return (
        <div className="choice-card">
            <img src={image} alt={title} className="choice-card-image" />
            {isPopular && (
                <div className="popular-badge">
                    Popular Choice
                </div>
            )}
            <div className="choice-card-content">
                <h3 className="choice-card-title">{title}</h3>
                <p className="choice-card-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default ChoiceCard;