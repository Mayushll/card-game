import React, {useEffect} from 'react';
import {useTSelector} from "../../../../app/hooks";
import s from './index.module.css'
import {Square} from "./Square/Square";
import {TSquare} from "../../entities/Board/types";

export const GameBoard = () => {
    const squares:TSquare[] = useTSelector(state => state.squares.Squares)
    useEffect(()=>{
        console.log(squares)
    },[squares])
    return (
        <div className={s.wrapper}>
            {
                squares.map((item:TSquare)=>(
                   <Square square={item}/>
                ))
            }
        </div>
    );
};
