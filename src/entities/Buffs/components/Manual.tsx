import { L10n } from "_shared/locale/locale"
import { Buffs } from "entities/Buffs/dispatcher/dispatcher"
import { TBuffsMembers } from "entities/Buffs/types/types"

export const BuffsManual = () => {
    return (
        <div>
            {Object.keys(Buffs).map((buff) => (
                <div>
                    <img width={100} src={require(`assets/buffs/${buff}.webp`)} alt={`${buff}`} />
                    {L10n.Buffs[buff as TBuffsMembers]}
                </div>
            ))}
        </div>
    )
}
