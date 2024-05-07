import { PersonList } from "../../Pages/PersonList"
import './PersonCardComponent.css'
export const PersonCardComponent = (props) => {

    return (
        <>  
            <section className="CardComponent">
            <div className="CardComponentContainer">
            <h3 className="CardComponent__title">{props.name}</h3>
            <p className="CardComponent__text">{props.species}</p>
            <img className="CardComponent__img" src={props.image} alt={props.name} />
            </div>
            </section>
        </>
    )
}