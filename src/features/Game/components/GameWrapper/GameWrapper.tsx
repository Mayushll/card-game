import React from 'react';
import {GameBoard} from "../GameBoard/GameBoard";
import {CardPicker} from "../CardPicker/CardPicker";

export const GameWrapper = () => {
    return (
        <div>
            <GameBoard/>
            <CardPicker/>
        </div>
    );
};