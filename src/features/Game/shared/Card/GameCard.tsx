import React from 'react';
import s from './index.module.css';
import {TCard, TCardsData} from "features/Game/entities/Card/types";
interface Props{
    card: TCard | TCardsData
}

export const GameCard = ({card}: Props) => {
    const iconSrc = `assets/classes/${card.hero_class}/icon.webp`
    const pictureSrc = `${process.env.PUBLIC_URL}/assets/${card.name}/picture.png`
    return (
        <div className={s.wrapper}>
            <img className={s.icon} src={iconSrc} alt={'icon'}/>
            <img className={s.card} src={pictureSrc} alt={card.name}/>
            <div className={s.bottom}>
                <div className={s.hp}>{card.base_hp}</div>
                <div className={s.dmg}>{card.base_dmg}</div>
            </div>
        </div>
    );
};