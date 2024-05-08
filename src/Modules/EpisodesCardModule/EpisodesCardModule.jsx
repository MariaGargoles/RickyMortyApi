import React from 'react';

export const EpisodesCard = (props) => {
    return (
        <>  
            <section className="EpisodeComponentSection">
                <div className="EpisodeComponentSection__Container">
                    <h2 className="EpisodeComponent__id">{props.id}</h2>
                    <h3 className="EpisodeComponent__title">{props.name}</h3>
                    <p className="EpisodeComponent__date">{props.date}</p>
                 
                    </div>
                </section>
        </> )
}
   

