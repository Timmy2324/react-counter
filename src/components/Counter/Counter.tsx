import React, {useState} from 'react';
import classes from './Counter.module.css';
import {Button} from "../Button/Button";
import {CounterBoard} from "../CounterBoard/CounterBoard";

type CounterPropsType = {
    startValue: number
    maxValue: number
}

export const Counter = ({startValue, maxValue, ...restProps}: CounterPropsType) => {

    const [value, setValue] = useState<number>(startValue);


    const onClickInc = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    const onClickReset = () => {
        setValue(startValue)
    }

    return (
        <div className={`${classes.counterWrapper} ${classes.wrap}`}>
            <div className={`${classes.inputsWrapper} ${classes.wrap}`}>
                <CounterBoard value={value}/>
            </div>
            <div className={`${classes.buttonsWrapper} ${classes.wrap}`}>
                <Button title={'inc'} callBack={onClickInc} disabled={value === maxValue}/>
                <Button title={'reset'} callBack={onClickReset}/>
            </div>
        </div>
    );
};