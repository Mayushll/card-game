import { TCardInBattle } from "entities/Card"

type idsData = {
    id: number
    type: null | "gold"
    x: number
    y: number
}
type squareData = idsData & card

type card = {
    card: TCardInBattle | null
}

type matrix = {
    id: number
    y: number
    x: number
    squares: squareData[][]
}

export function createSquares() {
    //fixme выглядит как кал
    let obj: matrix = {
        id: 1,
        x: 0,
        y: 0,
        squares: [],
    }
    while (obj.id < 22) {
        obj.squares.push([])

        let square: squareData = { id: obj.id, x: obj.x, y: obj.y, card: null, type: null }

        if (square.id === 11) {
            square.type = "gold"
        }

        obj.squares[obj.x].push(square)
        obj.y++
        obj.id++
        if ((obj.id - 1) % 7 === 0) {
            moveToNewRow(obj)
        }
    }
    return obj.squares
}

function moveToNewRow(obj: matrix) {
    obj.squares.push([])
    obj.x++
    obj.y = 0
}
