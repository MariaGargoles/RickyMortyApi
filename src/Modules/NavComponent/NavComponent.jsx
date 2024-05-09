import React from 'react';
import './NavModule.css';
import { NavLink } from 'react-router-dom';

export const NavComponent = () => {
    return (
    <nav className='NavarContainer'>
        <h2 className='NavarContainer__Text'>Ricky Morty API</h2>

        <ul className='NavarContainer__Menu'>
            <NavLink  to="/episodios" className='NavarContainer__Menu--item'>Episodios</NavLink >
            <NavLink  to="/personajes" className='NavarContainer__Menu--item'>Lista de personajes</NavLink>
            <NavLink to="/info" className='NavarContainer__Menu--item'>Información</NavLink>
        </ul>
    </nav>

)
}