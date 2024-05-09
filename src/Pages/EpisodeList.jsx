import { FooterComponent } from '../Modules/FooterComponent/FooterComponent'
import { NavComponent } from '../Modules/NavComponent/NavComponent'
import { EpisodesFetchComponent } from '../Modules/EpisodesFetchComponent/EpisodesFetchComponent'

export const EpisodeList = () => {
    return(<>
    <NavComponent />
    <EpisodesFetchComponent />
    <FooterComponent/>
    
    </>)
}