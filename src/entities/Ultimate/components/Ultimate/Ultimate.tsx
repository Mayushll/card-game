import { TPlayerIdType } from "entities/Players"
import { UltimateSlide } from "entities/Ultimate/components/UltimateSlide/UltimateSlide"
import { useUltimate } from "entities/Ultimate/hooks/useUltimate"

interface Props {
    id: TPlayerIdType
}

export const Ultimate = ({ id }: Props) => {
    useUltimate({ id })
    return <UltimateSlide id={id} />
}
