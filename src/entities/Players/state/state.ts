import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TCardInBattle, TCardInHand, TCardInProfile } from "entities/Card"
import { Players, TPlayerIdType, createCardPools } from "entities/Players"
import { TFraction, TFractionNames, TPlayer } from "entities/Players"
import { TBuffPayload } from "entities/Players/state/state.types"
import { RootState } from "app/store"

interface CardsState {
    Players: TPlayer[]
}

const initialState: CardsState = {
    Players: Players,
}

export const slice = createSlice({
    name: "Players",
    initialState,
    reducers: {
        prepareCards(state: Draft<CardsState>, action: PayloadAction<TCardInProfile[]>) {
            state.Players = state.Players.map((player: TPlayer) => ({
                ...player,
                cardPool: createCardPools({ player_color: player.color, player_id: player.player_id, cards: action.payload }),
                cardsInHand: createCardPools({ player_color: player.color, player_id: player.player_id, cards: action.payload }),
                //todo временная мера ^
            }))
        },
        changeTurn: (state: Draft<CardsState>) => {
            state.Players.forEach((player) => {
                player.turn = !player.turn
            })
        },
        addGold: (state: Draft<CardsState>, action: PayloadAction<{ player_id: number; value: number }>) => {
            let player = state.Players.find((player: TPlayer) => player.player_id === action.payload.player_id)!
            player.gold = player.gold + action.payload.value
        },
        addIncome: (state: Draft<CardsState>, action: PayloadAction<any>) => {
            state.Players.forEach((player) => {
                player.gold = player.gold + action.payload
            })
        },
        removeCardFromHand: (state: Draft<CardsState>, action: PayloadAction<TCardInBattle>) => {
            let player = state.Players.find((player: TPlayer) => player.player_id === action.payload.player_id)
            if (player) {
                player.cardsInHand = player.cardsInHand.filter((card: TCardInHand) => card.name !== action.payload.name)
            }
        },
        addCardInHand: (state: Draft<CardsState>, action: PayloadAction<TCardInBattle>) => {
            let player = state.Players.find((player: TPlayer) => player.player_id === action.payload.player_id)
            if (player) {
                let card = player.cardPool.find((card: TCardInHand) => card.name === action.payload.name)
                card && player.cardsInHand.push(card)
            }
        },
        addFractions: (state: Draft<CardsState>, action: PayloadAction<{ player_id: number; fraction: TFractionNames }>) => {
            let player = state.Players.find((player: TPlayer) => player.player_id === action.payload.player_id)
            if (player) {
                let fraction = player.fractions.find((fraction: TFraction) => fraction.name === action.payload.fraction)
                if (fraction) {
                    fraction.count++
                }
            }
        },
        removeFractions: (state: Draft<CardsState>, action: PayloadAction<{ player_id: number; fraction: TFractionNames }>) => {
            let player = state.Players.find((player: TPlayer) => player.player_id === action.payload.player_id)
            if (player) {
                let fraction = player.fractions.find((fraction: TFraction) => fraction.name === action.payload.fraction)
                if (fraction) {
                    fraction.count--
                }
            }
        },
        addBuffToPlayer: (state: Draft<CardsState>, action: PayloadAction<TBuffPayload>) => {
            let player = state.Players.find((player: TPlayer) => player.player_id === action.payload.player_id)
            if (player) {
                player.buffs.push(action.payload.buff)
            }
        },
        removeBuffFromPlayer: (state: Draft<CardsState>, action: PayloadAction<{ player_id: number; buff: string }>) => {
            let player = state.Players.find((player: TPlayer) => player.player_id === action.payload.player_id)
            if (player) {
                player.buffs = player.buffs.filter((buff) => buff !== action.payload.buff)
            }
        },
    },
})

export const selectPlayers = (state: RootState) => state.players.Players
export const selectPlayer = (id: TPlayerIdType | undefined) => (state: RootState) => state.players.Players.find((player: TPlayer) => player.player_id === id)

export const { addCardInHand, removeCardFromHand, addBuffToPlayer, removeBuffFromPlayer, removeFractions, addFractions, changeTurn, addIncome, addGold, prepareCards } = slice.actions
export const PlayersSlice = slice.reducer
