import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';
import classes from './Form.module.css'

const Form = () => {
    return (
        <div className={classes.BoxContainer}>
            <Input type="text" placeholder="username"/>
            <Input type="password" placeholder="password"/>
            <Button name="LOGIN" />
            <p> Not registered? <Link to="/register">Create an account</Link></p>
        </div>
    )
}

export default Form;