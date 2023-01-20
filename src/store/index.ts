import { configureStore } from "@reduxjs/toolkit";
import { articlesSlice } from "./articles/slice";
import { articleItemSlice } from "./article/slice";

export const store = configureStore({
  reducer: {
    [articlesSlice.name]: articlesSlice.reducer,
    [articleItemSlice.name]: articleItemSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
