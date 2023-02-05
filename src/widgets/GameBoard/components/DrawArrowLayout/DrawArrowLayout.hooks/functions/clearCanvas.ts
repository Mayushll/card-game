interface Props {
    context: any
    element: any
}

export const clearCanvas = ({ context, element }: Props) => {
    if (context) {
        context.clearRect(0, 0, element.width, element.height)
    }
}
