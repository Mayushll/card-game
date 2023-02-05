import { CSSTransition } from "react-transition-group"
import { useUltimateAnimation } from "entities/Ultimate/hooks/useUltimateAnimation"
import { SImage } from "./UltimateSlide.style"

interface Props {
    id: number
}

export const UltimateSlide = ({ id }: Props) => {
    let { ultimate, pictureSrc } = useUltimateAnimation(id)
    return (
        <CSSTransition in={!!ultimate?.visible} classNames={"ultimate"} timeout={1500} unmountOnExit>
            <SImage player_id={ultimate?.player_id} src={pictureSrc} alt={"ultimate"} draggable={false} />
        </CSSTransition>
    )
}
