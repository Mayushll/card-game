import { CSSTransition } from "react-transition-group"
import { useAnimation } from "_shared/hooks/useAnimation"
import { L10n } from "_shared/locale/locale"
import { getCardInfo } from "entities/Card"
import { AbilityDescription } from "widgets/Manual/components/ManualContent/Characters/RightPanel/AbilityDescription/AbilityDescription"
import { TManual } from "widgets/Manual/types/types"
import { SAbilitiesWrapper, SAnimation, SWrapper } from "./RightPanel.style"

interface Props {
    manual: TManual
}

export const RightPanel = ({ manual }: Props) => {
    const [animation, newItem] = useAnimation(manual.item, 150)
    const card = getCardInfo(newItem)

    let abilityText = L10n.Abilities[card.abilities[0]].description
    let abilityName = ""
    let ultimateText = "" //todo сделать независимые названия ультимейтам
    let ultimateName = L10n.Ultimates[card.name]
    return (
        <SWrapper>
            <CSSTransition timeout={150} classNames="fade" in={animation} key={manual.item} mountOnEnter unmountOnExit>
                <SAnimation>
                    <SAbilitiesWrapper>
                        <AbilityDescription name={abilityName} text={abilityText} />
                        <AbilityDescription name={ultimateName} text={ultimateText} />
                    </SAbilitiesWrapper>
                </SAnimation>
            </CSSTransition>
        </SWrapper>
    )
}
