
import React from 'react';

export const ExtraInfoEpisodesCard = (props) => {
    return (
        <div className="ExtraInfoEpisodesCardContainer">
            <p>Nombre episodio: {props.name}</p>
            <p>Fecha de publicación: {props.airDate}</p>
            <p>Número episodio: {props.episode}</p>
            <p>Creado: {props.created}</p>
        </div>
    );
}