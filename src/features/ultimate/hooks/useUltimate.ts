import { useSelector } from "react-redux"
import { TPlayerIdType } from "entities/Players"
import { selectUltimate } from "features/ultimate//modules/state/state"

interface Props {
    id: TPlayerIdType
}

export const useUltimate = ({ id }: Props) => {
    let name = useSelector(selectUltimate(id))
}
