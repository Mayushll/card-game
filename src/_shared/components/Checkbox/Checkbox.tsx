import { useRef } from "react"
import { CheckboxInput } from "_shared/components/Checkbox/CheckboxInput"
import { SLabel, SLabelWrapper, SWrapper } from "./Checkbox.style"

type Props = {
    label?: string
    checked?: boolean
    outlineColor?: string
    handler?: () => void
}

export const Checkbox = ({ label, checked = true, handler = () => {}, outlineColor = "white" }: Props) => {
    const id = useRef(Math.random())

    if (!label) {
        return (
            <SWrapper size={"30px"}>
                <CheckboxInput checked={checked} handler={handler} />
            </SWrapper>
        )
    }

    return (
        <SWrapper size={"30px"} outlineColor={outlineColor}>
            <SLabelWrapper>
                <SLabel htmlFor={`${id.current}`}>{label}</SLabel>
                <CheckboxInput id={id.current} checked={checked} handler={handler} />
            </SLabelWrapper>
        </SWrapper>
    )
}
