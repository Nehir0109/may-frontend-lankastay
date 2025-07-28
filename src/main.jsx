import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./styles/global.scss";
import "react-loading-skeleton/dist/skeleton.css";
import VerifiedScreen from "./components/VerifiedScreen/VerifiedScreen";
import { LoginForm } from "./components/LoginForm/LoginForm";

// React Router route yapısının kurgulanacağı kısımdır.
//  Detaylı bilgi için https://reactrouter.com/start/data/installation
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path:"/login",
    Component: LoginForm,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);