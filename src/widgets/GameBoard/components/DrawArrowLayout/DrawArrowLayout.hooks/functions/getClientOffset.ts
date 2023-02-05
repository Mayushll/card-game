interface Props {
    event: MouseEvent
    element: HTMLCanvasElement
}

export const getClientOffset = ({ event, element }: Props) => {
    const { pageX, pageY } = event
    const { left, top } = element.getBoundingClientRect()
    const x = pageX - left
    const y = pageY - top
    return {
        x,
        y,
    }
}
