import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./styles/global.scss";
import VerifiedScreen from "./components/VerifiedScreen/VerifiedScreen";

// React Router route yapısının kurgulanacağı kısımdır.
//  Detaylı bilgi için https://reactrouter.com/start/data/installation
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
    {
     path: "/verified",
     Component: VerifiedScreen,
    },
    {
        path: "/dashboard",
        Component: () => <h1>Dashboard</h1>,
    }
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
