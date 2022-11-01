import React, {useEffect} from 'react';
import s from './index.module.css'
import {useCardDrop} from "../../../hooks/useCardDrop";
import {GameCard} from "../../../shared/Card/GameCard";
import {TSquare} from "../../../entities/Board/types";
import {GameCardWrapper} from "./GameCardWrapper/GameCardWrapper";

interface Props{
    square: TSquare
}

export const Square = ({square}:Props) => {
    const {dropRef} = useCardDrop(square)

    return (
        <div ref={dropRef} className={s.wrapper}>
          {square.card &&
              <GameCardWrapper card={square.card}>
                     <GameCard card={square.card}/>
              </GameCardWrapper>
          }
        </div>
    );
};