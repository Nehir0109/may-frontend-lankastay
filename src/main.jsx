import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./styles/global.scss";
import DetailsPage from "./components/Details/DetailsPage";

// React Router route yapısının kurgulanacağı kısımdır.
//  Detaylı bilgi için https://reactrouter.com/start/data/installation
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
    {
    path: "/details",
    Component: DetailsPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
