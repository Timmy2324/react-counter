import React from 'react';
import classes from "../Counter/Counter.module.css";
import {InputWithLabel} from "../InputWithLabel/InputWithLabel";
import {Button} from "../Button/Button";

type SettingsCounterPropsType = {
    startValue: number
    maxValue: number
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    installSettings: () => void
}

export const SettingsCounter = ({startValue, maxValue, changeStartValue, changeMaxValue, installSettings, ...restProps}: SettingsCounterPropsType) => {

    const errorStartValue = startValue >= maxValue || startValue < 0;
    const errorMaxValue = startValue >= maxValue || maxValue < 0;

    return (
        <div className={`${classes.counterWrapper} ${classes.wrap}`}>
            <div className={`${classes.inputsWrapper} ${classes.wrap}`}>
                <div>
                    <InputWithLabel text={'start value'} counter={startValue} onChangeCounter={changeStartValue} error={errorStartValue}/>
                </div>
                <div>
                    <InputWithLabel text={'max value'} counter={maxValue} onChangeCounter={changeMaxValue} error={errorMaxValue}/>
                </div>
            </div>
            <div className={`${classes.buttonsWrapper} ${classes.wrap}`}>
                <Button title={'set'} callBack={installSettings} disabled={startValue >= maxValue || startValue < 0 || maxValue < 0}/>
            </div>
        </div>
    );
};