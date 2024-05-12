 
 
 export const CharacterCreate = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        let CharacterNameValue = event.target.elements.CharacterName.value;
        let CharacterSpecieValue = event.target.elements.CharacterSpecies.value;
    }

    return (
        <>
            <h2 className="FormTitle">Create your own character:</h2>
            <form className="FormContainer">
                <label className="FormContainer__characterName">Character Name:</label>
                <input type="text" id="CharacterName" placeholder="Insert Name"/>
                <label className="FormContainer__characterSpecies">Species:</label>
                <input type="text" id="CharacterSpecies" placeholder="Insert Specie"/>
                <button className="FormContainer__button" type="submit" onSubmit={submitHandler}>Create</button>
            </form>
        </>
    )
}
