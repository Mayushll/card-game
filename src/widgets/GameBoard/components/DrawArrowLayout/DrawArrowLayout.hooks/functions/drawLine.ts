interface Props {
    context: any
    startPosition: { x: number; y: number }
    lineCoordinates: { x: number; y: number }
}

function createIsShouldBeShown({ value, lineCoordinates, startPosition }: any) {
    let x = lineCoordinates.x < startPosition.x - value || lineCoordinates.x > startPosition.x + value
    let y = lineCoordinates.y < startPosition.y - value || lineCoordinates.y > startPosition.y + value

    return x || y
}

export function drawArrow({ context, startPosition, lineCoordinates }: Props) {
    let pixelsBeforeShowing = 70
    const isShouldBeShown = createIsShouldBeShown({ value: pixelsBeforeShowing, lineCoordinates, startPosition })
    const width = 10
    let headlen = 5
    let angle = Math.atan2(lineCoordinates.y - startPosition.y, lineCoordinates.x - startPosition.x)
    lineCoordinates.x -= Math.cos(angle) * (width * 1.15)
    lineCoordinates.y -= Math.sin(angle) * (width * 1.15)

    context.beginPath()
    context.moveTo(startPosition.x, startPosition.y)
    context.lineTo(lineCoordinates.x, lineCoordinates.y)
    context.strokeStyle = "#cc0000"
    context.lineWidth = width

    if (isShouldBeShown) {
        context.stroke()
    }

    context.beginPath()
    context.moveTo(lineCoordinates.x, lineCoordinates.y)
    context.lineTo(lineCoordinates.x - headlen * Math.cos(angle - Math.PI / 7), lineCoordinates.y - headlen * Math.sin(angle - Math.PI / 7))

    context.lineTo(lineCoordinates.x - headlen * Math.cos(angle + Math.PI / 7), lineCoordinates.y - headlen * Math.sin(angle + Math.PI / 7))

    context.lineTo(lineCoordinates.x, lineCoordinates.y)
    context.lineTo(lineCoordinates.x - headlen * Math.cos(angle - Math.PI / 7), lineCoordinates.y - headlen * Math.sin(angle - Math.PI / 7))

    context.strokeStyle = "#cc0000"
    context.lineWidth = width

    if (isShouldBeShown) {
        context.stroke()
    }

    context.fillStyle = "#cc0000"
    if (isShouldBeShown) {
        context.fill()
    }
}
