import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./styles/global.scss";
import VerifiedScreen from "./components/VerifiedScreen/VerifiedScreen";
import RegisterPage from "./pages/Register/Register";

// React Router route yapısının kurgulanacağı kısımdır.
//  Detaylı bilgi için https://reactrouter.com/start/data/installation
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/Register",
    Component: RegisterPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);