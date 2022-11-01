import {TCard, TCardsData} from "../../entities/Card/types";
import {changeHP, deleteCard} from "../../entities/Board/slice";
import {TSquare} from "../../entities/Board/types";
import {AppDispatch} from "../../store/store";

interface Props{
    target: TSquare,
    attacker: TCard
}

export const Attack = ({target, attacker}:Props) => (dispatch:AppDispatch) => {
    if (target.card) {
        attacker.attack()
        const hitpoints = target.card.base_hp - attacker.base_dmg
        if (hitpoints <= 0) {
            dispatch(deleteCard({id: target.id}))
        } else {
            dispatch(changeHP({hp: hitpoints, id: target.id}))
        }
    }
}