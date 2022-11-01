import React, {ReactNode} from 'react';
import s from "../../index.module.css"
import {useDrag} from "react-dnd";
import {TCardsData} from "../../../../entities/Card/types";

interface Props {
    children: ReactNode,
    card: TCardsData,
}

export const GameCardWrapper = ({children, card}: Props) => {
    const [, dragRef] = useDrag({
        type: `card`,
        item: () => {
            return card
        },
    })
    return (
        <div ref={dragRef}>
            {children}
        </div>
    );
};