import * as Yup from "yup" ;

export const validationSchema = Yup.object({
     name: Yup.string().required("Name is required"),
     email: Yup.string().email("Invalid email").required("Email is required"),
     phone: Yup.string().required("Phone number is required"),
     country: Yup.string().required("Country is required"),
     username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
       .required("Password is required"),
   });

