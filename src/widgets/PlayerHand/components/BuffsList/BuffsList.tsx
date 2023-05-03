import Tippy from "@tippyjs/react"
import { L10n } from "_shared/locale/locale"
import { TBuffsMembers } from "entities/Card"
import { TPlayer } from "entities/Players"
import { BuffIcon, Wrapper } from "./BuffsList.style"

interface Props {
    player: TPlayer
}

export const BuffsList = ({ player }: Props) => {
    return (
        <Wrapper>
            {player.buffs.length ? (
                player.buffs.map((buff: TBuffsMembers) => (
                    <Tippy theme={"light"} content={L10n.Buffs[buff]}>
                        <BuffIcon src={require(`assets/buffs/${buff}.webp`)} alt={`${buff}`} />
                    </Tippy>
                ))
            ) : (
                <></>
            )}
        </Wrapper>
    )
}
