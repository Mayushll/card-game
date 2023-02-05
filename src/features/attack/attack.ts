import { cardAttack } from "entities/Card"
import { TSquare } from "entities/Square/types/types"
import { calculateCardsChanges } from "features/attack/calculateCardsChanges/calculateCardsChanges"
import { setCards } from "features/attack/setCards/setCards"
import { weaponSound } from "features/attack/weaponSound/weaponSoynd"
import { AppDispatch } from "app/store"

interface Props {
    target: TSquare
    attacker: TSquare
}

export const Attack = ({ target, attacker }: Props, dispatch: AppDispatch) => {
    if (target.card && attacker.card) {
        weaponSound(attacker.card?.hero_class)

        cardAttack({ target: target.card, attacker: attacker.card }, dispatch)

        const { newTarget, newAttacker } = calculateCardsChanges({ target: target.card, attacker: attacker.card })

        let newTargetSquare = { ...target, card: newTarget }
        let newAttackerSquare = { ...attacker, card: newAttacker }

        setCards({ newTargetSquare, newAttackerSquare, dispatch })
    }
}
