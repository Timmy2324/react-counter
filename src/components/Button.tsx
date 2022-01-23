import React from "react";
import classes from './Button.module.css'

type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
}

export const Button = ({title, callBack, disabled}: ButtonPropsType) => {
    return (
        <button
            className={`${classes.button} ${disabled ? classes.disabled : ''}`}
            disabled={disabled}
            onClick={callBack}
        >
            {title}
        </button>
    )
}