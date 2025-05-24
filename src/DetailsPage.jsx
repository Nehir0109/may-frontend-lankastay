import React from 'react';
import TreasureToChoose from './components/DetailsPage/TreasureToChoose.jsx';

const choices = [
    {
        image: 'https://i.imgur.com/VZfDW4z.jpg',
        title: 'Green Lake',
        subtitle: 'Nature',
        isPopular: false,
    },
    {
        image: 'https://i.imgur.com/nXZCItr.jpg',
        title: 'Dog Clubs',
        subtitle: 'Pool',
        isPopular: false,
    },
    {
        image: 'https://i.imgur.com/7LXoFJo.jpg',
        title: 'Labour and Wait',
        subtitle: 'Shopping',
        isPopular: true,
    },
    {
        image: 'https://i.imgur.com/O9x2QuN.jpg',
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