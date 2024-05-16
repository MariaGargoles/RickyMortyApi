import { createSlice } from "@reduxjs/toolkit";
import { GetTaskListThunk } from "./taskThunk";
import { GetEpisodeListThunk } from "./taskThunk";

export const TaskSlice = createSlice({
  name: "task",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {
    addCharacter: (state, action) => {
      state.data.push(action.payload);
    },
    removeCharacter: (state, action) => {
      return state.filter((character) => character.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetTaskListThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(GetTaskListThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(GetTaskListThunk.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const EpisodeSlice = createSlice({
  name: "episode",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {
    addEpisode: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetEpisodeListThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(GetEpisodeListThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(GetEpisodeListThunk.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const { addCharacter, removeCharacter } = TaskSlice.actions;
export const { addEpisode } = EpisodeSlice.actions;
