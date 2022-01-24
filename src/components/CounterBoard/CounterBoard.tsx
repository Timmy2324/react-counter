import React from 'react';
import classes from './CounterBoard.module.css';

type CounterBoardPropsType = {
    value: number
}

export const CounterBoard = ({value}:CounterBoardPropsType) => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.span}>{value}</span>
        </div>
    );
};
