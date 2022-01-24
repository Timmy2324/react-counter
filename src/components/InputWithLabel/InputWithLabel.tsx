import React, {ChangeEvent} from 'react';
import classes from './InputWithLabel.module.css';

type InputWithLabelPropsType = {
    text: string
    counter: number
    onChangeCounter: (value: number) => void
}

export const InputWithLabel = ({text, counter, onChangeCounter, ...restProps}: InputWithLabelPropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeCounter(+e.currentTarget.value)
    }

    return (
        <div>
            <label className={classes.wrapper}>
                <span className={classes.text}>{text}</span>
                <input type={'number'} className={`${classes.counter} ${counter < 0 ? classes.errorCounter : ''}`} value={counter} onChange={onChangeHandler}/>
            </label>
        </div>
    );
};
