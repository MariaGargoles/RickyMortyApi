import { createSlice } from "@reduxjs/toolkit";
import { GetTaskListThunk } from "./taskThunk";

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
      })
      .addCase(GetTaskListThunk.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const { addCharacter, removeCharacter } = TaskSlice.actions;
