import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../ui/Button/Button.jsx";
import style from "../Register/Register.module.scss";
import validationSchema from "../../libs/validationSchema.js";
const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    country: "",
    username: "",
    password: "",
  };
const validationSchema = validationSchemas;
  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Name is required"),
  //   email: Yup.string().email("Invalid email").required("Email is required"),
  //   phone: Yup.string().required("Phone number is required"),
  //   country: Yup.string().required("Country is required"),
  //   username: Yup.string().required("Username is required"),
  //   password: Yup.string()
  //     .min(6, "Password must be at least 6 characters")
  //     .required("Password is required"),
  // });

  const handleSubmit = (values) => {
    localStorage.setItem("userData", JSON.stringify(values));
    alert("Registration successful!");
  };

  return (
    <div className="registerContainer">
      <div className="registerLeft">
        <div className="overlay">
          <h1 className="logo">
            Lanka<span>Stay.</span>
          </h1>
        </div>
      </div>

      <div className="registerRight">
        <h2>Create Account</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="registerForm">
              {["name", "email", "phone", "country", "username", "password"].map((field) => (
                <div key={field} className="formGroup">
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
                  <ErrorMessage name={field} component="div" className="error" />
                </div>
              ))}

              <div className="terms">
                <Field type="checkbox" name="terms" required />
                <label htmlFor="terms">
                  By signing up you agree to{" "}
                  <a href="" target="_blank" rel="noopener noreferrer">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>

              <Button type="submit" className="registerButton">
                Register
              </Button>

              <div className="loginLink">
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
