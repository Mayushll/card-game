import { useSelector } from "react-redux"
import { TPlayerIdType } from "entities/Players"
import { createUltimate } from "entities/Ultimate/dispatcher/dispatcher"
import { selectUltimate } from "entities/Ultimate/modules/state/state"

interface Props {
    id: TPlayerIdType
}

export const useUltimate = ({ id }: Props) => {
    let name = useSelector(selectUltimate(id))
}
