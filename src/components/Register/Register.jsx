import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../ui/Button/Button.jsx";
import style from "../Register/Register.module.scss";
 import {validationSchema} from "../../libs/validationSchema.js";
const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    country: "",
    username: "",
    password: "",
  };



  const handleSubmit = (values) => {
    localStorage.setItem("userData", JSON.stringify(values));
    alert("Registration successful!");
  };

  return (
    <div className={style.registerContainer}>
      
      <div className={style.registerLeft}>
        <div className={style.overlay}>
          <h1 className={style.logo}>
            Lanka<span>Stay.</span>
          </h1>
        </div>
      </div>

      <div className={style.registerRight}>
        <h2>Create Account</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className={style.registerForm}>
              {["name", "email", "phone", "country", "username", "password"].map((field) => (
                <div key={field} className={style.formGroup}>
                  <Field
                    name={field}
                    type={field === "password" ? "password" : "text"}
                    placeholder={
                      field === "phone"
                        ? "With Country Code"
                        : field === "email"
                        ? "name@gmail.com"
                        : field.charAt(0).toUpperCase() + field.slice(1)
                    }
                  />
                  <ErrorMessage name={field} component="div" className={style.error} />
                </div>
              ))}

              <div className={style.terms}>
                <Field type="checkbox" name="terms" required />
                <label htmlFor="terms">
                  By signing up you agree to{" "}
                  <a href="" target="_blank" rel="noopener noreferrer">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>

              <Button type="submit" className={style.registerButton}>
                Register
              </Button>

              <div className={style.loginLink}>
                <a href="/login">Login</a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
