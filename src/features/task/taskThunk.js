import { createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

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

export const GetEpisodeListThunk = createAsyncThunk(
  "Episode/getEpisodeList",

  async () => {
    const request = await fetch("https://rickandmortyapi.com/api/episode");
    try {
      if (request.ok) {
        const data = await request.json();
        const arrayResults = data.results.map((episodio, index) => ({
          name: episodio.name,
          date: episodio.air_date,
          characters: episodio.characters,
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

export const GetExtraInfoThunk = createAsyncThunk(
  "Episodes/getEpisodeExtraInfo",
  async (id) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      if (response.ok) {
        const episode = await response.json();
        const characterIds = episode.characters.map((url) => url.split("/")[5]);
        const charactersResponse = await fetch(
          `https://rickandmortyapi.com/api/character/${characterIds.join(",")}`
        );
        if (charactersResponse.ok) {
          const characters = await charactersResponse.json();
          return { episode, characters };
        } else {
          console.log("Failed to fetch characters");
        }
      } else {
        console.log("Failed to fetch episode");
      }
    } catch (error) {
      console.log(error);
    }
  }
);
