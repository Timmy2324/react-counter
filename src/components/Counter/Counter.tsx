import React, {useEffect, useState} from 'react';
import classes from './Counter.module.css';
import {Button} from "../Button/Button";
import {CounterBoard} from "../CounterBoard/CounterBoard";

type CounterPropsType = {
    startValue: number
    maxValue: number
    isChangeValue: boolean
}

export const Counter = ({startValue, maxValue, isChangeValue, ...restProps}: CounterPropsType) => {

    const [value, setValue] = useState<number>(startValue);
    let isRed = value === maxValue;

    useEffect(() => {
        setValue(startValue)
    },[startValue])

    const onClickInc = () => {
        if (value < maxValue && !isChangeValue) {
            setValue(value + 1)
        }
    }

    const onClickReset = () => {
        setValue(startValue)
    }

    const spanText = () => {
        if (!isChangeValue) {
            return String(value);
        }
        if (isChangeValue && (startValue < 0 || maxValue < 0 || startValue >= maxValue)){
            isRed = true
            return 'Incorrect value';
        } else {
            isRed = false
            return 'enter values and press "set"';
        }
    }

    const text = spanText();

    return (
        <div className={`${classes.counterWrapper} ${classes.wrap}`}>
            <div className={`${classes.inputsWrapper} ${classes.wrap}`}>
                <CounterBoard value={text} isRed={isRed}/>
            </div>
            <div className={`${classes.buttonsWrapper} ${classes.wrap}`}>
                <Button title={'inc'} callBack={onClickInc} disabled={value === maxValue || isChangeValue}/>
                <Button title={'reset'} callBack={onClickReset} disabled={isChangeValue}/>
            </div>
        </div>
    );
};