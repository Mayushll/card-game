import { TCardInBattle } from "entities/Card"
import { CreateClass } from "entities/Card"

export function calculateDamage(target: TCardInBattle, attacker: TCardInBattle) {
    let multiplier = CreateClass(attacker.hero_class).dmg_multiplier[target.hero_class]
    return Math.floor(target.current_hp - (attacker.base_dmg + (attacker.bonus_damage || 0)) * multiplier)
}
