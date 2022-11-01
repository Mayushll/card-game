import {RefObject, useState} from "react";
import {linkStart} from "../services/linkStart/linkStart";

export function useStartGame(app:RefObject<HTMLDivElement>){
    const [isStarted, setIsStarted] = useState(false)

    function start(){
        app.current?.requestFullscreen()
        setIsStarted(true)
        linkStart()
    }

    return {isStarted, start}
}