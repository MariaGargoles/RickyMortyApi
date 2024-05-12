import { useDispatch } from "react-redux"
import { addCharacter } from "../features/task/taskSlice";
import { FooterComponent } from '../Modules/FooterComponent/FooterComponent'
import { NavComponent } from '../Modules/NavComponent/NavComponent'

export const CharacterCreate = () => {
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()
    const name = event.target.elements.CharacterName.value;
    const species = event.target.elements.CharacterSpecies.value;
    dispatch(addCharacter({ name, species }))
    
  }

  return (
    <>
    <NavComponent/>
      <h2 className="FormTitle">Create your own character:</h2>

      <form className="FormContainer" onSubmit={submitHandler}>
        <label className="FormContainer__characterName">Character Name:</label>
        <input type="text" id="CharacterName" placeholder="Insert Name" />

        <label className="FormContainer__characterSpecies">Species:</label>
        <input type="text" id="CharacterSpecies" placeholder="Insert Specie" />

        <button className="FormContainer__button" type="submit">
          Create
        </button>
      </form>
      <FooterComponent/>
    </>
    
  );
};
