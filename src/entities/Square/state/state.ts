import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TCardInBattle } from "entities/Card"
import { createSquares } from "entities/Square/data/data"
import { TSquare } from "entities/Square/types/types"
import { RootState } from "app/store"

export interface BoardState {
    round: number
    Squares: TSquare[][]
}

const initialState: BoardState = {
    round: 0,
    Squares: createSquares(), //fixme имеет смысл использовать матрицу только для конечной отрисовки и лист клеток представить в другом виде
}

export const slice = createSlice({
    name: "squares",
    initialState,
    reducers: {
        addRound: (state: Draft<BoardState>) => {
            state.round++
        },
        addMoves: (state: Draft<BoardState>) => {
            state.Squares.forEach((array) => {
                array.forEach((square) => {
                    if (square.card) {
                        square.card = { ...square.card, movePoints: 1, attackPoints: 1 }
                    }
                })
            })
        },
        addBuffToBoard: (state: Draft<BoardState>, action: PayloadAction<{ buff: string; player_id: number }>) => {
            state.Squares.forEach((array) => {
                array.forEach((square) => {
                    if (square.card && square.card.player_id === action.payload.player_id) {
                        square.card = { ...square.card, shield: true }
                    }
                })
            })
        },
        setSquare: (state: Draft<BoardState>, action: PayloadAction<{ x: number; y: number; card: TCardInBattle | null }>) => {
            let { x, y, card } = action.payload
            let target = state.Squares[x][y]
            if (target && card !== undefined) {
                target.card = card
            }
        },
    },
})

export const selectRound = (state: RootState) => state.squares.round
export const selectSquares = (state: RootState) => state.squares.Squares

export const { setSquare, addBuffToBoard, addMoves, addRound } = slice.actions
export const SquaresSlice = slice.reducer
