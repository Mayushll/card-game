import React, {useRef} from 'react';
import s from "./index.module.css";
import {useStartGame} from "../../hooks/useStartGame";
import {GameWrapper} from "../GameWrapper/GameWrapper";
import {StartMenu} from "../StartMenu/GameStart";

export const Wrapper = () => {
    const wrapper = useRef<HTMLDivElement>(null)
    const {isStarted, start} = useStartGame(wrapper)
    return (
        <div className={s.wrapper} ref={wrapper}>
            {
                isStarted ? <GameWrapper/> : <StartMenu start={start}/>
            }
        </div>
    );
};