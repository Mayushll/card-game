import { TCardInBattle } from "entities/Card"
import { changeTarget } from "features/attack/calculateCardsChanges/changeTarget/changeTarget"

export const a = 1

export const CardWithShield: TCardInBattle = {
    name: "Kiyohime",
    hero_class: "lancer",
    max_hp: 50,
    base_dmg: 1,
    base_range: 1,
    abilities: [],
    fraction: null,
    price: 5,
    onBoard: true,
    player_color: "red",
    player_id: 1,
    id: "1",
    current_hp: 50,
    bonus_damage: 0,
    shield: true,
    attackPoints: 1,
    movePoints: 1,
}

describe("changeTarget", () => {
    it("should destroy shield", () => {
        expect(changeTarget({ target: CardWithShield, attacker: CardWithShield }).shield).toBe(false)
    })
    it("should do some damage", () => {
        console.log(changeTarget({ target: CardWithShield, attacker: CardWithShield }).current_hp)
        expect(changeTarget({ target: CardWithShield, attacker: CardWithShield }).current_hp).toBe(49)
    })
})
