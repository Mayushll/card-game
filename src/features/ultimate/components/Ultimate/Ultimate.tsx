import { TPlayerIdType } from "entities/Players"
import { useUltimate } from "features/ultimate//hooks/useUltimate"
import { UltimateSlide } from "features/ultimate//modules/components/UltimateSlide/UltimateSlide"

interface Props {
    id: TPlayerIdType
}

export const Ultimate = ({ id }: Props) => {
    useUltimate({ id })
    return <UltimateSlide id={id} />
}
