import React from 'react';
import './EpisodesCardModule.css';
import { NavLink } from 'react-router-dom';

export const EpisodesCard = (props) => {
    return (
        <>  
            <section className="EpisodeComponentSection">
                <div className="EpisodeComponentSection__Container">
                    
                    <h3 className="EpisodeComponent__title">{props.name}</h3>
                    <p className="EpisodeComponent__date">{props.date}</p>
                    <NavLink to={`/ExtraInfoEpisodes/${props.id}`}><button className='EpisodeComponent__button'>Mas información</button></NavLink>
                    
                    </div>
                </section>
        </> )
}
   

