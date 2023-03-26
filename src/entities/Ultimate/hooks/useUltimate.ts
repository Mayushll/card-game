import { useSelector } from "react-redux"
import { TPlayerIdType } from "entities/Players"
import { createUltimate } from "entities/Ultimate/dispatcher/dispatcher"
import { useUltimateAnimation } from "entities/Ultimate/hooks/useUltimateAnimation"
import { selectUltimate } from "entities/Ultimate/state/state"

interface Props {
    id: TPlayerIdType
}

export const useUltimate = ({ id }: Props) => {
    let name = useSelector(selectUltimate(id))
}
