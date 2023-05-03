import { TCardInBattle } from "entities/Card"
import { buffConsts } from "entities/Card/modules/Buffs/consts/consts"

export function HololiveBuff() {
    function add(card: TCardInBattle): TCardInBattle {
        if (card.fraction !== "Hololive") {
            return card
        }
        return { ...card, base_dmg: card.base_dmg + buffConsts.Hololive }
    }

    function remove(card: TCardInBattle): TCardInBattle {
        return { ...card, base_dmg: card.base_dmg - buffConsts.Hololive }
    }

    return { add, remove }
}
