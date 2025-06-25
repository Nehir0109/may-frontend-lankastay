import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import "./styles/global.scss";
import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";

// React Router route yapısının kurgulanacağı kısımdır.
//  Detaylı bilgi için https://reactrouter.com/start/data/installation
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
    <RouterProvider router={router} />
    </>
  </StrictMode>
);
