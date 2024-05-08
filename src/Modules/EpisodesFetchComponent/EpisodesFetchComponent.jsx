import React, { useState, useEffect } from 'react';
import { EpisodesCard } from '../EpisodesCardModule/EpisodesCardModule';


export const EpisodesFetchComponent = () => {
    const [result, setResult] = useState([]);
    const url = 'https://rickandmortyapi.com/api/episode';
 
    useEffect(() => {
        const request = fetch(url)
            .then(response => { 
                if (response.ok){
                    const jsonData = response.json();
                    jsonData.then((data) => {
                        const arrayResults = data.results.map((episodio,index) => ({
                            numero: episodio.id,
                            name: episodio.name,
                            date: episodio.air_date,
                            personajes: episodio.characters
                            
                        }));
                        console.log(arrayResults)
                        setResult(arrayResults);
                    })
                   
                } else {
                    console.log("error");
                }
            })
            .catch(error => {
                console.error('Hubo un problema con la llamada a la api:', error);
            });
    }, []);

    return <>
    {result.map((episodio,index) => <EpisodesCard id={episodio.id} name={episodio.name} date={episodio.date} personajes={episodio.characters}/>)}

    </>
};
