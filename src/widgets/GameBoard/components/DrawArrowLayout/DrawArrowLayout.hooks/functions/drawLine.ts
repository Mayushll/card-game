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
    //variables to be used when creating the arrow

    let pixelsBeforeShowing = 70
    const isShouldBeShown = createIsShouldBeShown({ value: pixelsBeforeShowing, lineCoordinates, startPosition })
    const width = 10
    let headlen = 5
    let angle = Math.atan2(lineCoordinates.y - startPosition.y, lineCoordinates.x - startPosition.x)
    // This makes it so the end of the arrow head is located at lineCoordinates.x, lineCoordinates.y, don't ask where 1.15 comes from
    lineCoordinates.x -= Math.cos(angle) * (width * 1.15)
    lineCoordinates.y -= Math.sin(angle) * (width * 1.15)

    //starting path of the arrow from the start square to the end square and drawing the stroke
    context.beginPath()
    context.moveTo(startPosition.x, startPosition.y)
    context.lineTo(lineCoordinates.x, lineCoordinates.y)
    context.strokeStyle = "#cc0000"
    context.lineWidth = width

    if (isShouldBeShown) {
        context.stroke()
    }

    //starting a new path from the head of the arrow to one of the sides of the point
    context.beginPath()
    context.moveTo(lineCoordinates.x, lineCoordinates.y)
    context.lineTo(lineCoordinates.x - headlen * Math.cos(angle - Math.PI / 7), lineCoordinates.y - headlen * Math.sin(angle - Math.PI / 7))

    //path from the side point of the arrow, to the other side point
    context.lineTo(lineCoordinates.x - headlen * Math.cos(angle + Math.PI / 7), lineCoordinates.y - headlen * Math.sin(angle + Math.PI / 7))

    //path from the side point back to the tip of the arrow, and then again to the opposite side point
    context.lineTo(lineCoordinates.x, lineCoordinates.y)
    context.lineTo(lineCoordinates.x - headlen * Math.cos(angle - Math.PI / 7), lineCoordinates.y - headlen * Math.sin(angle - Math.PI / 7))

    //draws the paths created above
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
