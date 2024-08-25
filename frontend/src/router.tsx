import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home_page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export const AppRouterProvider = () => {
  return (
    <RouterProvider router={router} />
  );
};