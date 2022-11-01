import {TCard, TCardsData} from "./types";
import {Sounds} from "../AudioPlayer/AudioPlayer";
import {getRandomInt} from "../../utils/getRandomInt";
import {changeHP, deleteCard} from "../Board/slice";
import {TSquare} from "../Board/types";

export function CreateCard(stats:TCardsData|undefined):any{
    if (!stats){
        throw new Error('Карта не найдена')
    }
    return{
        ...stats,
        ...canAttack(stats.name),
        ...canMove(stats.name),
    }
}

function attack(target:TSquare){
    if (target.card) {
        attacker.attack()
        const hitpoints = target.card.base_hp - attacker.base_dmg
        if (hitpoints <= 0) {
            dispatch(deleteCard({id: target.id}))
        } else {
            dispatch(changeHP({hp: hitpoints, id: target.id}))
        }
    }
}

function canAttack(name: string){
    let counter = 1
    return{
        attack: () => {
            switch(name){
                case 'Kiyohime':
                    Sounds.changeAudio(`assets/Kiyohime/attack${counter}`)
                    counter === 3 ? counter = 1 : counter++
                    break
                case 'Nero':
                    Sounds.changeAudio(`assets/Nero/attack${getRandomInt(1,3)}`)
                    break
                case 'Jeanne_Dark':
                    Sounds.changeAudio(`assets/Jeanne_Dark/attack${getRandomInt(1,2)}`)
                    break
                case 'DAN':
                    Sounds.changeAudio(`assets/DAN/attack${getRandomInt(1,2)}`)
                    break
                default:
            }
        }
    }
}
function canMove(name: string){
    return{
        move: () => console.log('moving')
    }
}
