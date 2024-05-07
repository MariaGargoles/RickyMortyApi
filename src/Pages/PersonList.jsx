import React, { useState, useEffect } from 'react';

import { PersonCardComponent } from '../Modules/PersonCardComponent/PersonCardComponent';

export const PersonList = () => {
    const [result, setResult] = useState([]);
    const url = 'https://rickandmortyapi.com/api/character';
 
    useEffect(() => {
        const request = fetch(url)
            .then(response => { 
                if (response.ok){
                    const jsonData = response.json();
                    jsonData.then((data) => {
                        const arrayResults = data.results.map((personaje,index) => ({
                            name: personaje.name,
                            image: personaje.image,
                            species: personaje.species
                        }));
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
    {result.map((personaje,index) => <PersonCardComponent name={personaje.name} image={personaje.image} species={personaje.species}/>)}

    </>
};
