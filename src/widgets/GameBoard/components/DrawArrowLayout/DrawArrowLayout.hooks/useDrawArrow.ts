import { RefObject, useEffect } from "react"
import { clearCanvas } from "widgets/GameBoard/components/DrawArrowLayout/DrawArrowLayout.hooks/functions/clearCanvas"
import { drawArrow } from "widgets/GameBoard/components/DrawArrowLayout/DrawArrowLayout.hooks/functions/drawLine"
import { getClientOffset } from "widgets/GameBoard/components/DrawArrowLayout/DrawArrowLayout.hooks/functions/getClientOffset"

interface Props {
    ref: RefObject<HTMLCanvasElement>
}

export const useDrawArrow = ({ ref }: Props) => {
    useEffect(() => {
        let element = ref.current!
        const context = element.getContext("2d")
        let startPosition = { x: 0, y: 0 }
        let lineCoordinates = { x: 0, y: 0 }
        let isDrawStart = false

        const mouseDownListener = (event: MouseEvent) => {
            startPosition = getClientOffset({ event, element })
            isDrawStart = true
        }
        const mouseMoveListener = (event: MouseEvent) => {
            if (!isDrawStart) return

            lineCoordinates = getClientOffset({ event, element })
            clearCanvas({ context, element })
            drawArrow({ context: context, lineCoordinates: lineCoordinates, startPosition: startPosition })
        }
        const mouseupListener = () => {
            isDrawStart = false
            clearCanvas({ context, element })
        }
        element.addEventListener("mousedown", mouseDownListener)
        element.addEventListener("mousemove", mouseMoveListener)
        element.addEventListener("mouseup", mouseupListener)
        return () => {
            element.removeEventListener("mousedown", mouseDownListener)
            element.removeEventListener("mousemove", mouseMoveListener)
            element.removeEventListener("mouseup", mouseupListener)
        }
    }, [ref])
}
