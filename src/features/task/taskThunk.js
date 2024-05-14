import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetTaskListThunk = createAsyncThunk(
  "task/getTaskList",
  async () => {
    const request = await fetch("https://rickandmortyapi.com/api/character");
    try {
      if (request.ok) {
        const data = await request.json();
        let arrayResults = data.results.map((personaje, index) => ({
          name: personaje.name,
          image: personaje.image,
          species: personaje.species,
        }));
        return arrayResults;
        console.log(arrayResults);
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }
);
