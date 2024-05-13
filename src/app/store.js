import { configureStore } from "@reduxjs/toolkit";
import { TaskSlice } from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    task: TaskSlice.reducer,
  },
});
