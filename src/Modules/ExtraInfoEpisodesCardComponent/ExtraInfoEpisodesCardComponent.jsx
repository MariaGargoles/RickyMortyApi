
import React from 'react';
import "./Extrainfo.css"

export const ExtraInfoEpisodesCard = (props) => {
    return (
        <div className="ExtraInfoEpisodesCardContainer">
            <p className='ExtraInfoEpisodesCardContainer__text'>Nombre episodio: {props.name}</p>
            <p className='ExtraInfoEpisodesCardContainer__text'>Fecha de publicación: {props.airDate}</p>
            <p className='ExtraInfoEpisodesCardContainer__text'>Número episodio: {props.episode}</p>
            <p className='ExtraInfoEpisodesCardContainer__text'>Creado: {props.created}</p>
        </div>
    );
}