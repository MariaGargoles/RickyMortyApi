import { FooterModule } from '../Modules/FooterModule/FooterModule'
import {NavModule} from '../Modules/NavModule/NavModule'
import { EpisodesFetchComponent } from '../Modules/EpisodesFetchComponent/EpisodesFetchComponent'

export const EpisodeList = () => {
    return(<>
    <NavModule />
    <EpisodesFetchComponent />
    <FooterModule/>
    
    </>)
}