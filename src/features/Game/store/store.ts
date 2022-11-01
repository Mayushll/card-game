import { configureStore } from '@reduxjs/toolkit'
import Cards from "../entities/Card/slice";
import Squares from "../entities/Board/slice";
export const store = configureStore({
    reducer: {
        cards: Cards,
        squares: Squares
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
