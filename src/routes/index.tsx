import { createBrowserRouter } from "react-router-dom";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <h1>home</h1>,
  },
  {
    path: "/revisao",
    element: <h1>revisao</h1>,
  },
]);