import { SRange } from "./Range.style"

type TRange = {
    value: number
    handler: any
    min?: number
    max?: number
    text?: string
}

export const Range = ({ value, handler, min, max, text }: TRange) => {
    return (
        <>
            {text ? <span>{text}</span> : <></>}
            <SRange value={value} onChange={handler} min={min} max={max} />
        </>
    )
}
