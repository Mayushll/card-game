import { ReactNode } from "react"
import { CSSTransition } from "react-transition-group"
import { TCardInBattle } from "entities/Card"
import { selectPlayer } from "entities/Players"
import { ultimate } from "features/ultimate/ultimate"
import { ActionPoints } from "widgets/GameBoard/components/Square/CardWrapper/ActionPoints"
import { BottomPanel } from "widgets/GameBoard/components/Square/CardWrapper/BottomPanel"
import { useTDispatch, useTSelector } from "app/store"
import { SShield, SWrapper } from "."

interface Props {
    children: ReactNode
    card: TCardInBattle
}

export const CardWrapper = ({ children, card }: Props) => {
    const dispatch = useTDispatch()
    const player = useTSelector(selectPlayer(card.player_id))!
    function onClickHandler(card: TCardInBattle) {
        if (player.turn) {
            dispatch(ultimate({ name: card.name, player_id: card.player_id, visible: true }))
        }
    }
    return (
        <SWrapper onClick={() => onClickHandler(card)} style={{ position: "relative" }}>
            <CSSTransition classNames={"shield"} in={card.shield} timeout={500} unmountOnExit mountOnEnter>
                <SShield />
            </CSSTransition>
            {player.turn ? <ActionPoints movePoints={card.movePoints} attackPoints={card.attackPoints} /> : <></>}
            {children}
            <BottomPanel card={card} />
        </SWrapper>
    )
}
