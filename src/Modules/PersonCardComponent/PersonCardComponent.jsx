import { PersonList } from "../../Pages/PersonList"

export const PersonCardComponent = (props) => {

    return (
        <>  
            
            <h3 className="CardComponent__title">{props.name}</h3>
            <img className="CardComponent__img" src={props.image} alt={props.name} />
            <p className="CardComponent__text">{props.species}</p>
        </>
    )
}