import styles from "./LoginForm.module.scss";
import Button from '../../components/ui/Button/Button';
import { Link, useNavigate } from "react-router";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Alert from "../../components/ui/Alert/Alert";
import { useState } from "react";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Kullanıcı adı zorunludur"),
  password: Yup.string().min(6, "Şifre en az 6 karakter olmalıdır").required("Şifre zorunludur"),
});

const initialValues = {
  username: "",
  password: "",
};

export const LoginForm = () => {


  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("info");


  const navigate = useNavigate();

 

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
  try {
    const response = await fetch("https://6829efb0ab2b5004cb3543e3.mockapi.io/api/v1/users");
    const users = await response.json();

    const matchedUser = users.find(
      (user) =>
        user.username === values.username &&
        user.password === values.password
    );

    if (matchedUser) {
      setAlertMessage("Giriş başarılı!");
      setAlertType("success");

      localStorage.setItem("user", JSON.stringify(matchedUser));
      navigate("/");
    } else {
      setErrors({ password: "Kullanıcı adı veya şifre hatalı!" });
      setAlertMessage("Kullanıcı adı veya şifre hatalı!");
      setAlertType("error");
    }
  } catch (error) {
    console.error("Giriş sırasında bir hata oluştu:", error);
    setAlertMessage("Sunucuya bağlanılamadı. Lütfen daha sonra tekrar deneyin.");
    setAlertType("error");
  } finally {
    setSubmitting(false);
  }
};

  return (
     <div className={styles.contentContainer}>
      <div className={styles.imageContainer}>
        <h1 className={styles.lankastayContent}>
          <span style={{ color: "#3252df" }}>Lanka</span>
          <span style={{ color: "#1a1a1a" }}>Stay.</span>
        </h1>
        <img src="/images/verifiedScreen.svg" className={styles.imageContent} />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => {
          const uErr = touched.username && errors.username;
          const pErr = touched.password && errors.password;

          return (
            <>
              <Form className={styles.loginContainer}>
                <Alert message={alertMessage} type={alertType} />
                <h2 className={styles.title}>Login Account</h2>

              
             <div className={styles.fieldGroup}>
          <label htmlFor="username" className={styles.label}>Username</label>

          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            aria-describedby="username-error"
            aria-invalid={!!uErr}
            className={`${styles.input} ${uErr ? styles.invalid : ""}`}
          />

        
        <span id="username-error" className={styles.errorText} aria-live="polite">
          <ErrorMessage name="username" component="span" />
        </span>
      </div>

          
          <div className={styles.fieldGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>

            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              aria-describedby="password-error"
              aria-invalid={!!pErr}
              className={`${styles.input} ${pErr ? styles.invalid : ""}`}
            />

            <span id="password-error" className={styles.errorText} aria-live="polite">
              <ErrorMessage name="password" component="span" />
            </span>
          </div>


                <div className={styles.checkboxRow}>
                  <Field type="checkbox" id="terms" name="terms" />
                  <label htmlFor="terms">
                    By signing up, you agree to{" "}
                    <Link to="#">terms and conditions</Link> at LankaStay.
                  </label>
                </div>

                <Button
                  type="submit"
                  className={styles.loginButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>

                <p className={styles.signupLink}>
                  <Link to="#">Create an Account</Link>
                </p>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
