import { configureStore } from "@reduxjs/toolkit";
import { TaskSlice } from "../features/task/taskSlice";
import { EpisodeSlice } from "../features/task/taskSlice";
import { ExtraInfoEpisodeSlice } from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    task: TaskSlice.reducer,
    episode: EpisodeSlice.reducer,
    extra: ExtraInfoEpisodeSlice.reducer,
  },
});
