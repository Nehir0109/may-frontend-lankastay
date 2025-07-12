import React from 'react'
import styles from "./LoginForm.module.scss";
import Button from '../ui/Button/Button';

export const LoginForm = () => {



  return (
    <div className={styles.loginContainer}>

        <h2 className={styles.title}>Login Account</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username" />

        <label htmlFor="passsword">Password</label>
        <input type="text" id="password" placeholder='6+ characters' />

        <div className={styles.checkboxRow}>
            <input type="checkbox" id='terms' />
            <label htmlFor="terms">
                By Signing up you agree to{" "}
                <a href="#">terms and conditions</a> at zoho.
            </label>
        </div>


        <Button className={styles.loginButton}>Login</Button>

        <p className={styles.signupLink}>
            <a href="#">Create an Account</a>
        </p>
    </div>
  )
};

export default LoginForm;
