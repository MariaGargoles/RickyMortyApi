import { PersonList } from "../../Pages/PersonList"

export const PersonCardComponent = (props) => {

    return (
        <>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name} />
            <p>{props.species}</p>
        </>
    )
}