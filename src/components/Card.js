import React from 'react';
// import SwApi from '../services/sw-api';

const Card = (ship) => {
    return (
        <div>
            <div key={ship.url}>
                <h2>Name: {ship.name}</h2>
                <h4>Price: {ship.cost_in_credits}</h4>
                <h4>Make: {ship.manufacturer}</h4>
                <h4>Max-Speed: {ship.max_atmosphering_speed}</h4>
            </div>
        </div>
    )
}

export default Card;
