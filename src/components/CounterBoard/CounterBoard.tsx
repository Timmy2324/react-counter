import React from 'react';
import classes from './CounterBoard.module.css';

type CounterBoardPropsType = {
    value: string
    isRed?: boolean
}

export const CounterBoard = ({value, isRed, ...restProps}:CounterBoardPropsType) => {


    const spanStyle = `${classes.span} ${isRed ? classes.red : ''}`

    return (
        <div className={classes.wrapper}>
            <span className={spanStyle}>{value}</span>
        </div>
    );
};
