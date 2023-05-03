import { TBuffsMembers } from "entities/Card"

export interface TPlayerPayload {
    player_id: number
}

export interface TBuffPayload extends TPlayerPayload {
    buff: TBuffsMembers
}
