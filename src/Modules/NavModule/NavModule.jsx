import React from 'react';
import './NavModule.css';

export const NavModule = () => {
    return (
    <nav className='NavarContainer'>
        <h2 className='NavarContainer__Text'>Ricky Morty API</h2>

        <ul className='NavarContainer__Menu'>
            <li className='NavarContainer__Menu--item'>Episodios</li>
            <li className='NavarContainer__Menu--item'>Lista de personajes</li>
            <li className='NavarContainer__Menu--item'>Información</li>
        </ul>
    </nav>

)
}