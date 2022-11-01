import React from 'react';
import s from './index.module.css'
interface Props{
    start: ()=>void;
}
export const StartMenu = ({start}:Props) => {
    return (
        <div className={s.wrapper}>
            <button className={s.button} onClick={start}>Start</button>
        </div>
    );
};