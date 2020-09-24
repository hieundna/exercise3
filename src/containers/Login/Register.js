import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import classes from '../../components/Form/Form.module.css';
import styles from './Login.module.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className={styles.Login}>
            <div className={classes.BoxContainer}>
                <Input type="text" placeholder="username"/>
                <Input type="password" placeholder="password"/>
                <Input type="password" placeholder="confirm password"/>
                <Button name="REGISTER" />
                <p> Already have an account! <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register;