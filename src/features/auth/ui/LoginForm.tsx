import React from 'react';
import styles from './loginform.module.scss'

const LoginForm = () => {
    return (
        <form action="" className={styles.form}>
                <input type="text" name='username' placeholder='Username' />
                <input type="password" name='password' placeholder='Password' />
                <button type='submit'>Submit</button>
        </form>
    );
};

export default LoginForm;