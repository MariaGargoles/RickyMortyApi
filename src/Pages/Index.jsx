import { FooterComponent } from '../Modules/FooterComponent/FooterComponent'
import { NavComponent } from '../Modules/NavComponent/NavComponent'
import rickAndMortyImage from "../assets/Asset6.svg"
import './style.css'

export const IndexPage = () => {
    return(
    <>
    <NavComponent />
    <div className='ContainerMain'>
    <img src={rickAndMortyImage} alt="Ricky y Morty" className='ContainerMain__Imagen'/>
    </div>
    <FooterComponent/>
    </>)
}