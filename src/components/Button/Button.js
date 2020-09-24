import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button type="submit" className={classes.Button}>{props.name}</button>
    )
}

export default Button;