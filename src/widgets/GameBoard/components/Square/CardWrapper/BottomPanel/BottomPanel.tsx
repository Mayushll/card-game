import { TCardInBattle } from "entities/Card"
import { SBottom, SDamage, SHp } from "."

interface Props {
    card: TCardInBattle
}

export const BottomPanel = ({ card }: Props) => {
    return (
        <SBottom>
            <>
                <SHp>{card.current_hp || card.max_hp}</SHp>
                <SDamage>{card.base_dmg + (card.bonus_damage || 0)}</SDamage>
            </>
        </SBottom>
    )
}
