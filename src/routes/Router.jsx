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
import DonorRoute from "./DonorRoute";
import CreateDonationRequest from "../pages/Donor/CreateDonationRequest";
import MyDonationRequests from "../pages/Donor/MyDonationRequests";
import UpdateDonationRequest from "../pages/Donor/UpdateDonationRequest";
import AdminRouter from "./AdminRouter";
import AllUsers from "../pages/Admin/AllUsers";
import ErrorPage from "../pages/ErrorPage";
import DonationRequests from "../pages/DonationRequests";
import SearchDonors from "../pages/public/SearchDonors";
import DonationRequestDetails from "../pages/DonationRequestDetails";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
       {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },

      {
        path: '/search',
        Component: SearchDonors
      },
      {
        path: "/donation-requests",
        Component: DonationRequests
      },
      {
        path: "/donation-requests/:id",
        element:(
          <PrivateRoute>
            <DonationRequestDetails />
          </PrivateRoute>
        )
      },
      
     

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "admin",
            element: <AdminDashboard />
          },
          {
            path: "/dashboard/users",
            element: <AdminRouter><ManageUsers /></AdminRouter>
          },
          {
            path: "create-request",
            element: (
              <DonorRoute>
                <CreateDonationRequest />
              </DonorRoute>
            ),
          },
          {
            path: "my-requests",
            element: (
              <DonorRoute>
                <MyDonationRequests />
              </DonorRoute>
            ),
          },
          {
            path: "edit-request/:id",
            element: (
              <DonorRoute>
                <UpdateDonationRequest />
              </DonorRoute>
            ),
          },
          {
            path: "admin",
            element: (
              <AdminRouter>
                <AdminDashboard />
              </AdminRouter>
            ),
          },
          {
            path: "admin/users",
            element: (
              <AdminRouter>
                <AllUsers />
              </AdminRouter>
            ),
          },
          {
       path:"/dashboard/admin",
       element: (
        <PrivateRoute>
          <AdminRouter>
            <AdminDashboard />
          </AdminRouter>
        </PrivateRoute>
       )
      },
     
          // {
          //   path: "/donors",
          //   element: <SearchDonors />,
          // },
          // {
          //   path: "/pending-requests",
          //   element: <PendingRequests />,
          // },
          // {
          //   path: "/donation/:id",
          //   element: <DonationDetails />,
          // },
        ],
      },
    ],
  },
]);
