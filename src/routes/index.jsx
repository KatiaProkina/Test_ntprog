import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import OrdersPage from "../pages/OrdersPage";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/orders",
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        element: <OrdersPage />,
      },
    ],
  },
]);
