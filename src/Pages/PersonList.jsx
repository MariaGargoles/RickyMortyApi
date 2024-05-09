import { FooterComponent } from '../Modules/FooterComponent/FooterComponent'
import { NavComponent } from '../Modules/NavComponent/NavComponent'
import { PersonFetchComponent } from "../Modules/PersonFetchComponent/PersonFetchComponent";

export const PersonList = () => {
    return(<>
    <NavComponent/>
    <PersonFetchComponent/>
    <FooterComponent/>
    </>)
}