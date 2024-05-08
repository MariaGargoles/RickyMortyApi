import React from 'react';
import './EpisodesCardModule.css';

export const EpisodesCard = (props) => {
    return (
        <>  
            <section className="EpisodeComponentSection">
                <div className="EpisodeComponentSection__Container">
                    <h3 className="EpisodeComponent__title">{props.name}</h3>
                    <p className="EpisodeComponent__date">{props.date}</p>
                 
                    </div>
                </section>
        </> )
}
   

