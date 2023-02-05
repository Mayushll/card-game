import { getRandomInt } from "utils/getRandomInt"

export const Character = {
    getSrc(name: string) {
        return `assets/characters/${name}`
    },
}

interface Props {
    min: number
    max: number
    func: any
}

export function countDefaultVoicesDecorator({min, max, func}:Props) {
    let counter = getRandomInt(min, max)
    return (args: any) => {
        func({ ...args, int: counter })
        counter++
        if (counter > max) {
            counter = min
        }
    }
}
