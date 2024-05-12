import { useDispatch } from "react-redux"
import { addCharacter } from "../features/task/taskSlice";
import { FooterComponent } from '../Modules/FooterComponent/FooterComponent'
import { NavComponent } from '../Modules/NavComponent/NavComponent'
import "../Modules/FormStyle/CharacterCreateStyle.css"
import { PersonFetchComponent } from "../Modules/PersonFetchComponent/PersonFetchComponent";

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
        <input type="text" id="CharacterName" className="FormContainer__input" placeholder="Insert Name" />

        <label className="FormContainer__characterSpecies">Species:</label>
        <input type="text" id="CharacterSpecies"  className="FormContainer__input" placeholder="Insert Specie" />

        <button className="FormContainer__button" type="submit">
          Create
        </button>
      </form>
      <PersonFetchComponent/>
      <FooterComponent/>
    </>
    
  );
};
