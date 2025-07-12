import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "../Register/Register.module.scss"

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      country: Yup.string().required("Country is required"),
      username: Yup.string().required("Username is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("userData", JSON.stringify(values));
      alert("Registration successful!");
    },
  });

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="overlay">
          <h1 className="logo">
            Lanka<span>Stay.</span>
          </h1>
        </div>
      </div>

      <div className="register-right">
        <h2>Create Account</h2>
        <form onSubmit={formik.handleSubmit} className="register-form">
          {["name", "email", "phone", "country", "username", "password"].map((field) => (
            <div key={field} className="form-group">
              <input
                name={field}
                type={field === "password" ? "password" : "text"}
                placeholder={
                  field === "phone"
                    ? "With Country Code"
                    : field === "email"
                    ? "name@gmail.com"
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field]}
              />
              {formik.touched[field] && formik.errors[field] && (
                <div className="error">{formik.errors[field]}</div>
              )}
            </div>
          ))}

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              By signing up you agree to{" "}
              <a href="https://zoho.com" target="_blank" rel="noopener noreferrer">
                terms and conditions
              </a>
              .
            </label>
          </div>

          <button type="submit" className="register-button">
            Register
          </button>

          <div className="login-link">
            <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
