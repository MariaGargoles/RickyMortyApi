import React, { useState, useEffect } from 'react';

export const PersonList = (props) => {
    const [results, setResults] = useState([]);
    const url = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        const request = fetch(url)
            .then(response => { 
                if (response.ok){
                    const jsonData = response.json();
                    const arrayResults = jsonData.results.map(arrayResult => ({
                        name: arrayResult.name,
                        image: arrayResult.image,
                        species: arrayResult.species
                    }));
                    setResults(arrayResults);
                } else {
                    console.log("error");
                }
            })
            .catch(error => {
                console.error('Hubo un problema con la llamada a la api:', error);
            });
    }, []);
};
