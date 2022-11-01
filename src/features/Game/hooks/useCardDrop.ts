import {useTDispatch} from "../../../app/hooks";
import {useDrop} from "react-dnd";
import {pickCard} from "../services/pickCard/pickCard";
import {TSquare} from "../entities/Board/types";
import {useEffect, useState} from "react";
import {TCard, TCardsData} from "../entities/Card/types";
import {Attack} from "../services/attack/attack";

export function useCardDrop(square:TSquare){
    const dispatch = useTDispatch()
    function onDrop(item:any){ //fixme
        if (!item.hasOwnProperty('attack')) {
            dispatch(pickCard(item.name, square.id))
        }
        else{
            dispatch(Attack({target: square, attacker: item}))
        }
    }
    const [canDrop,dropRef] = useDrop(() => ({
        accept: 'card',
        drop:(item:TCardsData | TCard, monitor)=>{
            onDrop(item)
        },
        canDrop: (item:TCardsData | TCard) =>{
            return !(square.card && !item.hasOwnProperty('attack'));
        }

    }),[square])
    return {dropRef, canDrop}
}