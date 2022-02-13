import React, {ChangeEvent} from 'react';
import classes from './InputWithLabel.module.css';

type InputWithLabelPropsType = {
    text: string
    counter: number
    onChangeCounter: (value: number) => void
    error: boolean
}

export const InputWithLabel = ({text, counter, onChangeCounter, error, ...restProps}: InputWithLabelPropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeCounter(+e.currentTarget.value)
    }

    const inputStyle = `${classes.counter} ${error ? classes.errorCounter : ''}`;

    return (
        <div>
            <label className={classes.wrapper}>
                <span className={classes.text}>{text}</span>
                <input type={'number'} className={inputStyle} value={counter} onChange={onChangeHandler}/>
            </label>
        </div>
    );
};
