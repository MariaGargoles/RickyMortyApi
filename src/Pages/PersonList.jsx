import React, { useState, useEffect } from 'react';

export const PersonList = (props) => {
    const url = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        const request = fetch(url)
            .then(response => { 
                if (response.ok){
                    const jsonData = response.json();
                    const arrayResults = jsonData.props.map(arrayResult => ({
                        name: props.name,
                        image: props.image,
                        species: props.species
                    }));
                } else {
                    console.log("error");
                }
            })
            .catch(error => {
                console.error('Hubo un problema con la llamada a la api:', error);
            });
    }, []);
};
