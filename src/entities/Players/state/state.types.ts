import { TBuffsMembers } from "entities/Buffs"

export interface TPlayerPayload {
    player_id: number
}

export interface TBuffPayload extends TPlayerPayload {
    buff: TBuffsMembers
}
