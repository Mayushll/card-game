import { TAttackProps, TCard, TCardInBattle } from "entities/Card"
import { Artoria } from "entities/Card/dispatcher/Artoria"
import { DAN } from "entities/Card/dispatcher/DAN"
import { Fubuki } from "entities/Card/dispatcher/Fubuki"
import { Jeanne_Dark } from "entities/Card/dispatcher/Jeanne_Dark"
import { Kiyohime } from "entities/Card/dispatcher/Kiyohime"
import { Matsuri } from "entities/Card/dispatcher/Matsuri"
import { Nero } from "entities/Card/dispatcher/Nero"
import { Texas } from "entities/Card/dispatcher/Texas"
import { AppDispatch } from "app/store"

interface TCardsList {
    [key: string]: TCard
}
const Cards: TCardsList = {
    Kiyohime: Kiyohime(),
    DAN: DAN(),
    Jeanne_Dark: Jeanne_Dark(),
    Nero: Nero(),
    Texas: Texas(),
    Fubuki: Fubuki(),
    Matsuri: Matsuri(),
    Artoria: Artoria(),
}

function cardDispatcher(name: string) {
    return Cards[name]
}

export function cardAttack({ target, attacker }: TAttackProps, dispatch: AppDispatch) {
    cardDispatcher(attacker.name).attack({ target, attacker }, dispatch)
}
export function cardDeath(name: string, card: TCardInBattle, dispatch: AppDispatch) {
    cardDispatcher(name).death(card, dispatch)
}
export function cardSummon(name: string, card: TCardInBattle, dispatch: AppDispatch) {
    cardDispatcher(name).summon(card, dispatch)
}
