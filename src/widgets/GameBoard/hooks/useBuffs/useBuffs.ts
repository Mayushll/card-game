import { isEqual } from "lodash"
import { useEffect, useRef } from "react"
import { addBuff, removeBuff } from "entities/Card"
import { TCardInBattle } from "entities/Card"
import { TPlayer, selectPlayer } from "entities/Players"
import { TSquare, setSquare } from "entities/Square"
import { useTDispatch, useTSelector } from "app/store"

export function useBuffs(square: TSquare) {
    const dispatch = useTDispatch()

    const firstMount = useRef(false)

    const player = useTSelector(selectPlayer(square.card?.player_id))!
    useEffect(() => {
        if (!firstMount.current) {
            firstMount.current = true
        } else {
            let card = observeBuffs(square, player)
            let isCardChanged = !isEqual(card, square.card) //fixme нужно как-то иначе это делать, возможно стоит изменить условие вызова useEffect
            if (isCardChanged) {
                dispatch(setSquare({ x: square.x, y: square.y, card: card }))
            }
        }
    }, [player?.buffs])
}

function observeBuffs(square: TSquare, player: TPlayer) {
    let card = square.card
    if (!card) {
        return null
    }
    card = addNewBuffs(card, player)
    card = clearBuffs(square, card, player)
    return card
}

function addNewBuffs(card: TCardInBattle, player: TPlayer) {
    player?.buffs.forEach((player_buff: string) => {
        let buff = card?.buffs?.find((card_buff) => card_buff === player_buff)
        if (!buff) {
            card = addBuff({ buff: player_buff, card: card })
        }
    })
    return card
}

function clearBuffs(square: TSquare, card: TCardInBattle, player: TPlayer) {
    card?.buffs?.forEach((card_buff) => {
        let buff = player.buffs.find((player_buff) => player_buff === card_buff)
        if (!buff && square.card) {
            card = removeBuff({ buff: card_buff, card: card })
        }
    })
    return card
}
