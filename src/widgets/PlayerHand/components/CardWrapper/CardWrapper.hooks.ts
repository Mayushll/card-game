import { useTSelector } from "app/store"
import { useEffect, useState } from "react"
import { TCardInBattle } from "entities/Card"

export function useIsOnBoard(card: TCardInBattle) {
    //fixme выглядит убого
    const board = useTSelector((state) => state.squares.Squares)
    const [alreadyOnBoard, setAlreadyOnBoard] = useState(false)
    useEffect(() => {
        let cards: TCardInBattle[] = []
        board.forEach((array) => {
            array.forEach((square) => {
                if (square.card) {
                    cards.push(square.card)
                }
            })
        })
        let isAlreadyOnBoard = !!cards.filter((item: TCardInBattle) => item.name === card.name).length
        setAlreadyOnBoard(isAlreadyOnBoard)
    }, [board])
    return alreadyOnBoard
}
