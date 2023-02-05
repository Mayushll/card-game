import { buffConsts } from "entities/Buffs/consts/consts"
import { TBuffsMembers } from "entities/Buffs/types/types"

export type TBuffLocale = {
    [T in TBuffsMembers]: string
}
export const BuffsLocale: TBuffLocale = {
    Texas: `Добавляет всем союзным персонажам ${buffConsts.Texas * 100}% урона.`,
    Hololive: `Добавляет всем союзным персонажам фракции Hololive ${buffConsts.Hololive} урона и ${buffConsts.Hololive} атаки.`,
}
