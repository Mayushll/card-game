import { useSwitchTurn } from "widgets/GameBoard/hooks/useSwitchTurn"
import { S3D, SBack, SFront, StyledWrapper } from "./SwitchTurnButton.style"

export const SwitchTurnButton = () => {
    const { activePlayer, doSwitchTurn } = useSwitchTurn()
    return (
        <StyledWrapper>
            <S3D>
                <SFront type={"button"} activePlayer={activePlayer?.player_id || 1} onClick={doSwitchTurn}>
                    Сменить ход <br /> (S - горячая клавиша)
                </SFront>
                <SBack type={"button"} activePlayer={activePlayer?.player_id || 1} onClick={doSwitchTurn}>
                    Сменить ход <br /> (S - горячая клавиша)
                </SBack>
            </S3D>
        </StyledWrapper>
    )
} //fixme вынести в 1 компонент стороны
