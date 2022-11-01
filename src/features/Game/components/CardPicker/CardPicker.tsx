import React from 'react';
import {useTSelector} from "../../../../app/hooks";
import {GameCard} from "../../shared/Card/GameCard";
import s from './index.module.css'
import {TCardsData} from "../../entities/Card/types";
import {CardWrapper} from "./CardWrapper/CardWrapper";

export const CardPicker = () => {
    const cards:TCardsData[] = useTSelector(state => state.cards.cardsData)
    return (
        <div className={s.list}>
            {
                cards.map((card:TCardsData)=>(
                    <CardWrapper card={card} key={card.name}>
                      <GameCard card={card}/>
                    </CardWrapper>
                ))
            }
        </div>
    );
};