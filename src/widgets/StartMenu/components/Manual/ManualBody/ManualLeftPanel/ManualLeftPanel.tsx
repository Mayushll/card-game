import { useEffect, useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { TManualPage } from "widgets/StartMenu/components/Manual/Manual"
import { SAnimation, SPicture, SWrapper } from "./ManualLeftPanel.style"

interface Props {
    page: TManualPage
    item: string
}

export const ManualLeftPanel = ({ page, item }: Props) => {
    const [animation, setAnimation] = useState(false)
    const [newItem, setNewItem] = useState<string>("Jeanne_Dark")
    useEffect(() => {
        setAnimation(false)
        setTimeout(() => {
            setNewItem(item)
            setAnimation(true)
        }, 150)
    }, [item])

    return (
        <SWrapper>
            <CSSTransition timeout={150} classNames="fade" in={animation} key={item} mountOnEnter unmountOnExit>
                <SAnimation>
                    <SPicture alt={"img"} draggable={false} src={require(`assets/${page}/${newItem}/preview-picture.webp`)} />
                </SAnimation>
            </CSSTransition>
        </SWrapper>
    )
}
