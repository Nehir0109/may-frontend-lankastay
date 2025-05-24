import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import "./styles/global.scss";
import ChoiceCard from "./components/DetailsPage/ChoiceCard";
import DetailsPage from "./DetailsPage.jsx";

// React Router route yapısının kurgulanacağı kısımdır.
//  Detaylı bilgi için https://reactrouter.com/start/data/installation
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/components/DetailsPage/ChoiceCard",
    Component: ChoiceCard,
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
    <RouterProvider router={router} />
    <DetailsPage />
    </>
  </StrictMode>
);
