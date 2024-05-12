import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addCharacter: (state, action) => {
      state.push(action.payload);
    },
    removeCharacter: (state, action) => {},
  },
});
