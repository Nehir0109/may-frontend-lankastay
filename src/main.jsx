import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/global.scss";
import "react-loading-skeleton/dist/skeleton.css";
import VerifiedScreen from "./components/VerifiedScreen/VerifiedScreen";
import LoginForm from "./pages/LoginForm/LoginForm.jsx";
import Home from "./pages/Home/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: LoginForm,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
