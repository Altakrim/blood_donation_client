import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/HomePage/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRouter";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: "/edit-profile",
        element: <PrivateRoute><EditProfile /></PrivateRoute>
      },
      {
        path:"/dashboard",
        element:<PrivateRoute><DashboardLayout /></PrivateRoute>
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: '/login',
        Component: Login,
      }
    ],
  },
]);
