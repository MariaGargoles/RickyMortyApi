

export const ExtraInfoCharapterModule = (props) => {

    return (<>
            <div className="ExtraInfoContainer">
            <h3 className="ExtraInfo__title">{props.name}</h3>
            <img className="ExtraInfo__img" src={props.image} alt={props.name} />
            </div>
    
    </>)

}