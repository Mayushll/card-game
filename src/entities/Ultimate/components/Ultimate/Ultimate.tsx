import { TPlayerIdType } from "entities/Players"
import { useUltimate } from "entities/Ultimate/hooks/useUltimate"
import { UltimateSlide } from "entities/Ultimate/modules/UltimateSlide/UltimateSlide"

interface Props {
    id: TPlayerIdType
}

export const Ultimate = ({ id }: Props) => {
    useUltimate({ id })
    return <UltimateSlide id={id} />
}
