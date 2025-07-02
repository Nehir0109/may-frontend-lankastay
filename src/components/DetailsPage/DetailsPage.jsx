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
        type: 'Nature',
        popular: false,
    },
    {
        image: Rectangle2,
        title: 'Dog Clubs',
        type: 'Pool',
        popular: false,
    },
    {
        image: Rectangle3,
        title: 'Labour and Wait',
        type: 'Shopping',
        popular: true,
    },
    {
        image: Rectangle4,
        title: 'Snorkeling',
        type: 'Beach',
        popular: false,
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