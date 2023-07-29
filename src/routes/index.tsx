import { createBrowserRouter } from "react-router-dom";
import { Home, Revision } from "../pages";

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/revision",
        element: <Revision />,
    },
]);