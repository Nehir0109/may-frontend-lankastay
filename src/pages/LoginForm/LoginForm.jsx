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


 //const navigate = useNavigate();

 

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
      navigate("/dashboard");
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
  {({ isSubmitting }) => (
    <>
      
      <Alert message={alertMessage} type={alertType} />

      <Form className={styles.loginContainer}>
        <h2 className={styles.title}>Login Account</h2>

        <label htmlFor="username">Username</label>
        <Field
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
        <ErrorMessage name="username" component="div" className={styles.error} />

        <label htmlFor="password">Password</label>
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <ErrorMessage name="password" component="div" className={styles.error} />

        <div className={styles.checkboxRow}>
          <Field type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">
            By signing up, you agree to{" "}
            <Link to="#">terms and conditions</Link> at LankaStay.
          </label>
        </div>

        <Button type="submit" className={styles.loginButton} disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>

        <p className={styles.signupLink}>
          <Link to="#">Create an Account</Link>
        </p>
      </Form>
    </>
  )}
</Formik>

    </div>
  );
};

export default LoginForm;
