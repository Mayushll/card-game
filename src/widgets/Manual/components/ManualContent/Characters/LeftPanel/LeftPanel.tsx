import { CSSTransition } from "react-transition-group"
import { useAnimation } from "_shared/hooks/useAnimation"
import { TManual } from "widgets/Manual/types/types"
import { SAnimation, SPicture, SWrapper } from "./LeftPanel.style"

interface Props {
    manual: TManual
}

export const LeftPanel = ({ manual }: Props) => {
    const [animation, newItem] = useAnimation(manual.item, 150)
    return (
        <SWrapper>
            <CSSTransition timeout={150} classNames="fade" in={animation} key={manual.item} mountOnEnter unmountOnExit>
                <SAnimation>
                    <SPicture alt={"img"} draggable={false} src={require(`assets/${manual.page}/${newItem}/preview-picture.webp`)} />
                </SAnimation>
            </CSSTransition>
        </SWrapper>
    )
}
