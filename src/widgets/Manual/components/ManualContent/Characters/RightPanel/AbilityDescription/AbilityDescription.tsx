import { SAbilityDescription, SAbilityName, SAbilityWrapper } from "widgets/Manual/components/ManualContent/Characters/RightPanel/AbilityDescription/AbilityDescription.style"

interface Props {
    name: string
    text: string
}

export const AbilityDescription = ({ name, text }: Props) => {
    return (
        <SAbilityWrapper>
            <SAbilityName>{name}</SAbilityName>
            <SAbilityDescription>{text}</SAbilityDescription>
        </SAbilityWrapper>
    )
}
