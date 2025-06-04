import React from 'react';
import TreasureToChoose from '../TreasureChoose/TreasureToChoose.jsx';
import Rectangle1 from '../../assets/Rectangle1.svg';
import Rectangle2 from '../../assets/Rectangle2.svg';
import Rectangle3 from '../../assets/Rectangle3.svg';
import Rectangle4 from '../../assets/Rectangle4.svg';



const choices = [
    {
        image: Rectangle1,
        title: 'Green Lake',
        subtitle: 'Nature',
        isPopular: false,
    },
    {
        image: Rectangle2,
        title: 'Dog Clubs',
        subtitle: 'Pool',
        isPopular: false,
    },
    {
        image: Rectangle3,
        title: 'Labour and Wait',
        subtitle: 'Shopping',
        isPopular: true,
    },
    {
        image: Rectangle4,
        title: 'Snorkeling',
        subtitle: 'Beach',
        isPopular: false,
    },
];

const DetailsPage = () => {
    return (
        <div style={{ padding: "40px" }}>
            <TreasureToChoose choices={choices} />
        </div>
    );
};

export default DetailsPage;