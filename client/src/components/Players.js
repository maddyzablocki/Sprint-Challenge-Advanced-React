import React from 'react';

function Players({country, id, name, searches}) {
    return(
        <div className="players">
            <h2 data-testid="player-name">{name}</h2>
            <p data-testid="player-country">{country}</p>
            <p data-testid="player-id">ID: {id}</p>
            <p data-testid="player-searches">Number of searches: {searches}</p>
        </div>
    )
}

export default Players;