import { FooterModule } from "../Modules/FooterModule/FooterModule";
import { NavModule } from "../Modules/NavModule/NavModule";
import { PersonFetchComponent } from "../Modules/PersonFetchComponent/PersonFetchComponent";

export const PersonList = () => {
    return(<>
    <NavModule/>
    <PersonFetchComponent/>
    <FooterModule/>
    </>)
}