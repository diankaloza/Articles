import { configureStore } from '@reduxjs/toolkit'

import { articleItemSlice } from './article/slice'
import { articlesSlice } from './articles/slice'

export const store = configureStore({
  reducer: {
    [articlesSlice.name]: articlesSlice.reducer,
    [articleItemSlice.name]: articleItemSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
