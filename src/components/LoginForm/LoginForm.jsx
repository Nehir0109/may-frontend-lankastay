
import styles from "./LoginForm.module.scss";
import Button from '../ui/Button/Button';
import { Link } from "react-router";

export const LoginForm = () => {



  return (
    <div className={styles.contentContainer}>
      <div className={styles.imageContainer}>
        <h1 className={styles.lankastayContent}>
          <span style={{ color: "#3252df" }}>Lanka</span>
          <span style={{ color: "#1a1a1a" }}>Stay.</span>
        </h1>
        <img src="public/images/verifiedScreen.svg" className={styles.imageContent}/>
      </div>

       <form className={styles.loginContainer}>

        <h2 className={styles.title}>Login Account</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username" />

        <label htmlFor="passsword">Password</label>
        <input type="text" id="password" placeholder="Password" />

        <div className={styles.checkboxRow}>
            <input type="checkbox" id='terms' />
            <label htmlFor="terms">
                By Signing up you agree to{" "}
                <Link to="#">terms and conditions</Link> at zoho.
            </label>
        </div>


        <Button type="submit" className={styles.loginButton}>Login</Button>

        <p className={styles.signupLink}>
            <Link to="#">Create an Account</Link>
        </p>
    </form>

    </div>
   
  )
};

export default LoginForm;
